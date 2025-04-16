import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientEpisodeCare } from './PatientEpisodeCare.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-episode-care',
  imports: [CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-episode-care.component.html',
  styleUrl: './patient-episode-care.component.css'
})
export class PatientEpisodeCareComponent {

  patientEpisodeCares: PatientEpisodeCare[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientEpisodeCareService: PatientService
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
    this.patientEpisodeCareService.fetchPatientEncounters(id).subscribe({
      next: (data) => {
        this.patientEpisodeCares = data;
        console.log('✅ Patient Encounters:', this.patientEpisodeCares);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }

}
