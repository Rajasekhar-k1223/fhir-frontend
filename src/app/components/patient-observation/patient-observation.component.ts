import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { ObservationModel } from './PatientObservation.model';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from '../../side-menu/side-menu.component';

@Component({
  selector: 'app-patient-observation',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    SideMenuComponent
  ],
  templateUrl: './patient-observation.component.html',
  styleUrl: './patient-observation.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('225ms ease-in-out')),
    ]),
  ]
})
export class PatientObservationComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  patientObservations: ObservationModel[] = [];
  patientId: string | null = null;
  loading: boolean = true;
  errorMessage: string | null = null;
  dataSource = new MatTableDataSource<any>([]);
  expandedElement: ObservationModel | null = null;

  displayedColumns: string[] = [
    'id', 'status', 'category', 'code',
    'effectiveDate', 'issued', 'value',
    'interpretation', 'reference', 'expand'
  ];

  constructor(
    private route: ActivatedRoute,
    private patientObservationService: PatientService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    if (this.patientId) {
      this.loadPatientObservations(this.patientId);
    } else {
      this.errorMessage = 'Invalid patient ID.';
      this.loading = false;
    }
  }

  toggleRow(obs: ObservationModel): void {
    this.expandedElement = this.expandedElement === obs ? null : obs;
  }
  isExpansionDetailRow = (index: number, row: any): boolean =>
    row.hasOwnProperty('detailRow') === false;
  loadPatientObservations(id: string) {
    this.patientObservationService.fetchPatientObservations(id).subscribe({
      next: (data) => {
        this.patientObservations = data;
        this.dataSource.data = this.patientObservations;
        this.loading = false;
      },
      error: (error) => {
        console.error('❌ Error fetching observations:', error);
        this.errorMessage = 'Failed to fetch observations.';
        this.loading = false;
      }
    });
  }
}
