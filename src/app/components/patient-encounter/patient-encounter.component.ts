import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientEncounter } from './patient-encounter.model';
import { SideMenuComponent } from '../../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-patient-encounter',
  imports: [MatTableModule,MatSortModule,MatPaginatorModule,CommonModule,SideMenuComponent,MatSidenavModule,MatCardModule,MatListModule],
  templateUrl: './patient-encounter.component.html',
  styleUrls: ['./patient-encounter.component.css']
})
export class PatientEncounterComponent implements OnInit {
  @Input() patientEncounters: any[] = [];
  displayedColumns: string[] = [
    'id',
    'status',
    'class',
    'priority',
    'type',
    'subject',
    'subjectStatus',
    'participant',
    'actualPeriod',
    'diagnosis',
    'reason',
    'admission',
    'serviceProvider',
    'episodeOfCare',
    'careTeam',
    'location',
    'lastUpdated'
  ];
  dataSource = new MatTableDataSource<any>();
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientEncounterService: PatientService
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
    this.patientEncounterService.fetchPatientEncounters(id).subscribe({
      next: (data) => {
        this.patientEncounters = data
        this.dataSource.data  = this.patientEncounters;
        console.log('✅ Patient Encounters:', this.patientEncounters);
      },
      error: (error) => {
        console.error('❌ Error fetching encounters:', error);
      }
    });
  }
}
