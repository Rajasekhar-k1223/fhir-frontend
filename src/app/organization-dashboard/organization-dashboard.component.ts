import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgxMasonryModule } from 'ngx-masonry';

@Component({
  selector: 'app-organization-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    NgxMasonryModule,
  ],
  templateUrl: './organization-dashboard.component.html',
  styleUrls: ['./organization-dashboard.component.css'],
})
export class OrganizationDashboardComponent {
  clinicalDepartments = [
    { name: 'Emergency / Casualty', icon: 'local_hospital' },
    { name: 'General Medicine', icon: 'healing' },
    { name: 'Pediatrics', icon: 'child_care' },
    { name: 'Gynecology & Obstetrics (OB/GYN)', icon: 'pregnant_woman' },
    { name: 'Orthopedics', icon: 'accessibility' },
    { name: 'Cardiology', icon: 'favorite' },
    { name: 'Neurology', icon: 'psychology' },
    { name: 'Nephrology', icon: 'opacity' },
    { name: 'Urology', icon: 'water_drop' },
    { name: 'Oncology', icon: 'coronavirus' },
    { name: 'Dermatology', icon: 'spa' },
    { name: 'ENT (Ear, Nose, Throat)', icon: 'hearing' },
    { name: 'Pulmonology', icon: 'air' },
    { name: 'Gastroenterology', icon: 'stomach' },
    { name: 'Psychiatry / Mental Health', icon: 'psychology_alt' },
    { name: 'Endocrinology', icon: 'science' },
    { name: 'Rheumatology', icon: 'accessibility_new' },
  ];

  diagnosticDepartments = [
    { name: 'Radiology', icon: 'radio' },
    { name: 'Laboratory / Pathology', icon: 'biotech' },
    { name: 'Pharmacy', icon: 'local_pharmacy' },
    { name: 'Anesthesiology', icon: 'airline_seat_flat' },
    { name: 'Physiotherapy / Rehabilitation', icon: 'fitness_center' },
    { name: 'Nursing Services', icon: 'nursing_home' },
    { name: 'Nutrition & Dietetics', icon: 'restaurant' },
  ];

  administrativeDepartments = [
    { name: 'Outpatient Department (OPD)', icon: 'groups' },
    { name: 'Inpatient / IPD', icon: 'bed' },
    { name: 'Medical Records (MRD)', icon: 'folder_shared' },
    { name: 'Billing & Insurance', icon: 'request_quote' },
    { name: 'Human Resources (HR)', icon: 'people_alt' },
    { name: 'IT & Health Information Systems (HIS)', icon: 'computer' },
    { name: 'Facilities & Maintenance', icon: 'build_circle' },
    { name: 'Quality Assurance / NABH / JCI', icon: 'check_circle' },
    { name: 'Biomedical Engineering', icon: 'engineering' },
  ];
}
