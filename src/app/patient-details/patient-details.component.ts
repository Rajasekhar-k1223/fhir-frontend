import { Patient } from './../patient/patient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardAvatar } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  imports: [MatDividerModule,MatIconModule,MatGridListModule,MatCardModule,MatProgressSpinnerModule,MatCardAvatar,CommonModule,MatSidenavModule, SideMenuComponent, MatButtonModule],
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientId: string | null = null;
  patientDetails: any = null;
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id'); // Get patient ID from URL
    if (this.patientId) {
      console.log(this.patientId)
      this.fetchPatientDetails(this.patientId);
    } else {
      this.errorMessage = "Invalid patient ID.";
      this.loading = false;
    }
  }

  // Fetch patient details using the service
  fetchPatientDetails(id: string) {
    this.patientService.fetchPatientDetails(id).subscribe(
      (data) => {
        console.log("Received patient details", data);
        console.log("data.patient",data)
        if (data) {
          console.log("patient DEtails ",data)
          const patient = data; // Assuming single patient data from response

          this.patientDetails = {
            // id: patient.patientId || 'N/A', // Direct string access
            fullName: `${patient.name[0].text || ''} ${patient.name?.[0]?.given || ''}`.trim(), // Corrected name extraction
            identifier: patient.identifier?.[0]?.value || 'N/A', // Directly extract identifier value
            // lastUpdated: patient.meta?.lastUpdated || 'N/A', // No need for `.value`
            active:patient.active,
            address:patient.address[0],
            birthdate:patient.birthDate,
            gender:patient.gender,
            marriedStatus:patient.maritalStatus.text,
            photo:patient.photo[0].url,
            telcom:patient.telecom[0],
            contact:patient.contact[0],
            generalPrac:patient.generalPractitioner[0],
            s:patient.managingOrganization,
            lastUpdate:patient.lastUpdated

          };

          console.log("Patient details:", this.patientDetails);

        }
        console.log("Patient details", this.patientDetails);
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching patient details';
        console.error('Fetch error:', error);
        this.loading = false;
      }
    );
  }

  // Navigate back to the patient list
  goToPatientList() {
    this.router.navigate(['/patient']);
  }
}
