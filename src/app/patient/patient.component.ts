import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  patientDetails: any[] = [];
  filteredPatients: any[] = [];
  searchQuery: string = '';

  currentPage = 0;
  pageSize = 100;
  totalPages = 0;
  paginatedPatients: any[] = [];
  gridCols = 3;

  constructor(private patientService: PatientService, private router: Router,private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.gridCols = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.gridCols = 1;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.gridCols = 2;
      } else {
        this.gridCols = 3; // Default for large and up
      }
    });
    this.patientService.getPatients().subscribe({
      next: (response) => {
        console.log(response.data)
        if (Array.isArray(response.data) && response.data.length > 0) {
          response.data.map(patientD=>{
            console.log(patientD)
          })
          this.patientDetails = response.data.map((patientData:any) => ({
            patientId: patientData.id || '',
            fullName: this.extractFullName(patientData),
            // mrn: this.extractMRN(patientData),
            mrn:patientData.identifier[0].value,
            lastUpdate: patientData.lastUpdate,
            photo:patientData.photo[0].url,
            status: patientData.active ?? 'Unknown',
          }));

          this.filteredPatients = [...this.patientDetails];
          this.updatePagination();
        }
      },
      error: (error) => console.error('Error fetching patient:', error),
    });
  }

  // extractFullName(patientData: any): string {
  //   if (Array.isArray(patientData?.name) && patientData.name.length > 0) {
  //     return patientData.name
  //       .map((nameObj: { given?: { value?: string }[]; family?: { value?: string } }) =>
  //         `${nameObj.given?.map(g => g.value).join(' ') || ''} ${nameObj.family?.value || ''}`.trim()
  //       )
  //       .join(', ');
  //   }
  //   return '';
  // }
  extractFullName(patientData: any): string {
    if (Array.isArray(patientData?.name) && patientData.name.length > 0) {
      return patientData.name
        .map((nameObj: { text?: string }) => nameObj.text || '')
        .filter((name: string) => name.trim() !== '')
        .join(', ');
    }

    return '';
  }
  ;extractMRN(patientData: any): string {
    if (Array.isArray(patientData?.identifier) && patientData.identifier.length > 0) {
      const mrnIdentifier = patientData.identifier.find(
        (idObj: { system?: string | null; value?: string }) => idObj.system === 'MR' || idObj.system === null
      );
      return mrnIdentifier?.value || '';
    }
    return '';
  }


  filterPatients() {
    const query = this.searchQuery.trim().toLowerCase();
    this.filteredPatients = query
      ? this.patientDetails.filter(
          (patient) =>
            patient.fullName.toLowerCase().includes(query) ||
            patient.patientId.toLowerCase().includes(query) ||
            patient.mrn.toLowerCase().includes(query)
        )
      : [...this.patientDetails];

    this.currentPage = 0;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredPatients.length / this.pageSize);
    this.paginatedPatients = this.filteredPatients.slice(
      this.currentPage * this.pageSize,
      (this.currentPage + 1) * this.pageSize
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  viewPatientDetails(mrn: string) {
    this.router.navigate(['/patient-details', mrn]);
  }
}
