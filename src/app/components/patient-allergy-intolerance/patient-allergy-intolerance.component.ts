import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientAllergyIntolerance } from './PatientAllergyIntolerance.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-patient-allergy-intolerance',
  imports: [MatIcon,MatTableModule,CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-allergy-intolerance.component.html',
  styleUrl: './patient-allergy-intolerance.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*', display: 'block' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PatientAllergyIntoleranceComponent {
  patientAllergyIntolerance: PatientAllergyIntolerance[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  expandedElement: any | null;
  displayedColumns: string[] = [
    'code', 'type', 'category', 'clinicalStatus',
    'recordedDate', 'criticality', 'verificationStatus',
    'lastOccurrence', 'expand'
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientAllergyIntoleranceService: PatientService
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
  getManifestationText(manifestations: { text: string }[] = []): string {
    return manifestations.map(m => m.text).join(', ');
  }
  // toggleRow(row: any) {
  //   this.expandedElement = this.expandedElement === row ? null : row;
  // }
  toggleRow(row: any): void {
    row.expanded = !row.expanded;
  }
  loadPatientEncounters(id: string) {
    this.patientAllergyIntoleranceService.fetchPatientAllergyIntolerances(id).subscribe({
      next: (data) => {
        this.patientAllergyIntolerance = data;
        console.log('✅ Patient AllergyIntolerance:', this.patientAllergyIntolerance);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }
}
