import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PractitionerService } from '../services/practitioner.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-practitioner',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,
    HttpClientModule, MatGridListModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './practitioner.component.html',
  styleUrls: ['./practitioner.component.css']
})
export class PractitionerComponent implements OnInit {
  private practitionerService = inject(PractitionerService);
  practitionerDetails: any[] = [];
  filteredPractitioners: any[] = [];
  paginatedPractitioners: any[] = [];
  searchQuery: string = '';
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchPractitioners();
  }

  fetchPractitioners(): void {
    this.practitionerService.getPractitioners(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        console.log('Practitioner API Response:', response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          console.log('Practitioner API Response", response');
          this.practitionerDetails = response.data.map(this.mapPractitionerData);
          console.log('Practitioner API Response, response',this.practitionerDetails);
          this.filteredPractitioners = [...this.practitionerDetails];
          this.updatePagination();
        }
      },
      error: (error) => console.error('Error fetching practitioners:', error),
    });
  }

  mapPractitionerData(practitionerData: any) {
    return {
      practitionerId: practitionerData.practitionerId || 'N/A',
      fullName: practitionerData.name?.[0].text || 'Unknown Name',
      specialization: practitionerData.specialization?.[0]?.text || 'Not Specified',
      status: practitionerData.active?.value ?? false,
      licenseNumber: practitionerData.identifier[0].value || 'N/A',
      photo:practitionerData.photo[0].url,
    };
  }

  filterPractitioners() {
    const query = this.searchQuery.trim().toLowerCase();
    this.filteredPractitioners = query
      ? this.practitionerDetails.filter(practitioner =>
          practitioner.fullName.toLowerCase().includes(query) ||
          practitioner.specialization.toLowerCase().includes(query) ||
          practitioner.practitionerId.toLowerCase().includes(query)
        )
      : [...this.practitionerDetails];

    this.currentPage = 0;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredPractitioners.length / this.pageSize);
    const start = this.currentPage * this.pageSize;
    this.paginatedPractitioners = this.filteredPractitioners.slice(start, start + this.pageSize);
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

  viewPractitionerDetails(practitionerId: string) {
    this.router.navigate(['/practitioner-details', practitionerId]);
  }
}
