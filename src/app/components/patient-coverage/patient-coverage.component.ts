import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientCoverage } from './patientCoverages.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-coverage',
  imports: [CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-coverage.component.html',
  styleUrl: './patient-coverage.component.css'
})
export class PatientCoverageComponent {
  patientCoverages: PatientCoverage[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientCoverageService: PatientService
  ) {}

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id'); // Get patient ID from URL
    if (this.patientId) {
      this.loadPatientEncounters(this.patientId);
    } else {
      this.errorMessage = "Invalid patient ID.";
      this.loading = false;
    }
  }

  loadPatientEncounters(id: string) {
    this.patientCoverageService.fetchPatientEncounters(id).subscribe({
      next: (data) => {
        this.patientCoverages = data;
        console.log('✅ Patient Encounters:', this.patientCoverages);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }

}
