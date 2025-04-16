import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientCondition } from './PatientCondition.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-patient-condition',
  imports: [MatTableModule,CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-condition.component.html',
  styleUrl: './patient-condition.component.css'
})
export class PatientConditionComponent {
  patientConditions: PatientCondition[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientConditionsService: PatientService
  ) {}
  displayedColumns: string[] = [
    'id',
    'code',
    'recordedDate',
    'clinicalStatus',
    'verificationStatus',
    'severity',
    'practitioner',
    'subject',
    'encounter',
    'identifier',
    'lastUpdated'
  ];
  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id'); // Get patient ID from URL
    if (this.patientId) {
      this.loadPatientConditions(this.patientId);
    } else {
      this.errorMessage = "Invalid patient ID.";
      this.loading = false;
    }
  }

  loadPatientConditions(id: string) {
    this.patientConditionsService.fetchPatientConditions(id).subscribe({
      next: (data) => {
        this.patientConditions = data;
        console.log('✅ Patient Conditions:', this.patientConditions);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }

}
