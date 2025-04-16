import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientDocReference } from './PatientDocReference.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patient-doc-reference',
  imports: [CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-doc-reference.component.html',
  styleUrl: './patient-doc-reference.component.css'
})
export class PatientDocReferenceComponent {

  patientDocReferences: PatientDocReference[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientDocReferenceService: PatientService
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
    this.patientDocReferenceService.fetchPatientEncounters(id).subscribe({
      next: (data) => {
        this.patientDocReferences = data;
        console.log('✅ Patient Encounters:', this.patientDocReferences);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }

}
