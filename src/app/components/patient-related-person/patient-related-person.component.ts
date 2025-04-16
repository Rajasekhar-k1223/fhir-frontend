import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientRelatedPerson } from './PatientRelatedPerson.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-related-person',
  imports: [CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-related-person.component.html',
  styleUrl: './patient-related-person.component.css'
})
export class PatientRelatedPersonComponent {

  patientRelatedPersons: PatientRelatedPerson[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientRelatedPersonService: PatientService
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
    this.patientRelatedPersonService.fetchPatientEncounters(id).subscribe({
      next: (data) => {
        this.patientRelatedPersons= data;
        console.log('✅ Patient Encounters:', this.patientRelatedPersons);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }
}
