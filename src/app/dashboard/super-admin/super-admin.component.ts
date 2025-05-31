import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
// Also import ChartsModule for baseChart if not done already


@Component({
  selector: 'app-super-admin',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    CommonModule,MatTableModule,MatCardModule,MatListModule,MatIconModule,
    NgChartsModule],
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {
  constructor(private router: Router) {}

  logs = [
  { "timestamp": "2025-05-22T01:36:55", "message": "User password changed" },
  { "timestamp": "2025-05-10T20:24:55", "message": "Admin logged in" },
  { "timestamp": "2025-05-09T10:00:55", "message": "Failed login attempt" },
  { "timestamp": "2025-05-16T08:21:55", "message": "Settings updated" },
  { "timestamp": "2025-05-11T04:08:55", "message": "Settings updated" },
  { "timestamp": "2025-05-11T08:47:55", "message": "User password changed" },
  { "timestamp": "2025-05-21T05:57:55", "message": "Export task completed" },
  { "timestamp": "2025-05-08T20:01:55", "message": "Database backup successful" },
  { "timestamp": "2025-05-10T10:13:55", "message": "File uploaded" },
  { "timestamp": "2025-05-16T03:49:55", "message": "New user registered" },
  { "timestamp": "2025-05-15T20:02:55", "message": "System health check passed" },
  { "timestamp": "2025-05-13T18:09:55", "message": "Export task completed" },
  { "timestamp": "2025-05-18T10:10:55", "message": "Failed login attempt" },
  { "timestamp": "2025-05-16T16:01:55", "message": "System health check passed" },
  { "timestamp": "2025-05-15T11:51:55", "message": "User password changed" },
  { "timestamp": "2025-05-13T04:03:55", "message": "Admin logged in" },
  { "timestamp": "2025-05-12T17:50:55", "message": "Database backup successful" },
  { "timestamp": "2025-05-10T02:20:55", "message": "New user registered" },
  { "timestamp": "2025-05-10T12:42:55", "message": "New user registered" },
  { "timestamp": "2025-05-21T11:51:55", "message": "Failed login attempt" },
  { "timestamp": "2025-05-20T14:00:55", "message": "User password changed" },
  { "timestamp": "2025-05-22T04:10:55", "message": "Export task completed" },
  { "timestamp": "2025-05-16T11:06:55", "message": "Admin logged in" },
  { "timestamp": "2025-05-11T13:54:55", "message": "File uploaded" },
  { "timestamp": "2025-05-20T09:10:55", "message": "New user registered" },
  { "timestamp": "2025-05-10T02:32:55", "message": "User logged out" },
  { "timestamp": "2025-05-17T06:37:55", "message": "Admin logged in" },
  { "timestamp": "2025-05-13T17:45:55", "message": "System health check passed" },
  { "timestamp": "2025-05-13T22:24:55", "message": "Database backup successful" },
  { "timestamp": "2025-05-15T00:57:55", "message": "Database backup successful" }
];
recentUpdates = [
  { "type": "Patient Added", "timestamp": "2025-05-21T08:10:00", "description": "New patient Robert Johnson registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-21T09:22:10", "description": "Blood test report uploaded for Emily." },
  { "type": "Info Updated", "timestamp": "2025-05-21T11:13:05", "description": "Phone number updated for Mark Thompson." },
  { "type": "Record Deleted", "timestamp": "2025-05-21T12:33:00", "description": "Obsolete allergy record deleted for Anna." },
  { "type": "Document Uploaded", "timestamp": "2025-05-21T13:47:50", "description": "MRI scan uploaded for Rachel." },
  { "type": "Info Updated", "timestamp": "2025-05-21T14:10:45", "description": "Address updated for Paul Walker." },
  { "type": "Patient Added", "timestamp": "2025-05-21T15:25:30", "description": "Patient Michael Scott registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-20T08:19:20", "description": "Prescription added for Sarah." },
  { "type": "Record Deleted", "timestamp": "2025-05-20T09:45:00", "description": "Old vaccination data removed for John." },
  { "type": "Info Updated", "timestamp": "2025-05-20T11:59:10", "description": "Insurance info updated for Lily Adams." },
  { "type": "Patient Added", "timestamp": "2025-05-20T13:15:45", "description": "Patient Kevin Malone registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-20T14:28:00", "description": "Discharge summary added for Jim Halpert." },
  { "type": "Info Updated", "timestamp": "2025-05-20T15:36:10", "description": "Emergency contact changed for Dwight Schrute." },
  { "type": "Record Deleted", "timestamp": "2025-05-20T16:52:30", "description": "Old lab results removed for Angela Martin." },
  { "type": "Patient Added", "timestamp": "2025-05-20T18:04:00", "description": "Patient Stanley Hudson registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-19T08:10:00", "description": "EKG report uploaded for Toby Flenderson." },
  { "type": "Info Updated", "timestamp": "2025-05-19T09:22:10", "description": "Medical history updated for Pam Beesly." },
  { "type": "Record Deleted", "timestamp": "2025-05-19T11:13:05", "description": "Expired medical data deleted for Creed Bratton." },
  { "type": "Document Uploaded", "timestamp": "2025-05-19T12:33:00", "description": "Allergy record added for Meredith Palmer." },
  { "type": "Patient Added", "timestamp": "2025-05-19T13:47:50", "description": "Patient Phyllis Vance registered." },
  { "type": "Info Updated", "timestamp": "2025-05-19T14:10:45", "description": "Phone number updated for Oscar Martinez." },
  { "type": "Document Uploaded", "timestamp": "2025-05-18T15:25:30", "description": "Dental record uploaded for Jan Levinson." },
  { "type": "Record Deleted", "timestamp": "2025-05-18T16:40:00", "description": "Duplicate record deleted for Ryan Howard." },
  { "type": "Info Updated", "timestamp": "2025-05-18T17:55:00", "description": "Email address changed for Kelly Kapoor." },
  { "type": "Patient Added", "timestamp": "2025-05-18T18:15:10", "description": "Patient Gabe Lewis registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-18T19:26:30", "description": "Ultrasound image uploaded for Holly Flax." },
  { "type": "Info Updated", "timestamp": "2025-05-17T09:30:00", "description": "Insurance details updated for Erin Hannon." },
  { "type": "Record Deleted", "timestamp": "2025-05-17T10:41:10", "description": "Obsolete document removed for David Wallace." },
  { "type": "Patient Added", "timestamp": "2025-05-17T12:03:20", "description": "New patient Charles Miner registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-17T13:14:30", "description": "X-ray uploaded for Darryl Philbin." },
  { "type": "Info Updated", "timestamp": "2025-05-17T14:25:40", "description": "Emergency contact updated for Roy Anderson." },
  { "type": "Record Deleted", "timestamp": "2025-05-17T15:36:50", "description": "Archived record deleted for Karen Filippelli." },
  { "type": "Patient Added", "timestamp": "2025-05-17T16:47:00", "description": "Patient Jo Bennett registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-17T17:58:10", "description": "Scan document uploaded for Nellie Bertram." },
  { "type": "Info Updated", "timestamp": "2025-05-17T19:09:20", "description": "Allergy data updated for Clark Green." },
  { "type": "Record Deleted", "timestamp": "2025-05-16T08:10:00", "description": "Old document removed for Pete Miller." },
  { "type": "Document Uploaded", "timestamp": "2025-05-16T09:22:10", "description": "Test result uploaded for Val Johnson." },
  { "type": "Info Updated", "timestamp": "2025-05-16T11:13:05", "description": "Blood group updated for Devon White." },
  { "type": "Patient Added", "timestamp": "2025-05-16T12:33:00", "description": "Patient Josh Porter registered." },
  { "type": "Document Uploaded", "timestamp": "2025-05-16T13:47:50", "description": "Immunization record uploaded for Cathy Simms." }
];


 dataSummary = [
    { name: 'Patients', count: 100000, size: 60.97 },
    { name: 'Observations', count: 400000, size: 176.72 },
    { name: 'Medication Requests', count: 250000, size: 94.61 },
    { name: 'Medications', count: 50000, size: 10.22 },
    { name: 'Organizations', count: 100000, size: 41.7 },
    { name: 'Locations', count: 100000, size: 56.18 },
    { name: 'Practitioners', count: 10000, size: 5.37 },
    { name: 'Insurances', count: 10000, size: 2.95 }
  ];
  navigateTo(name: string): void {
      if (name.toLowerCase() === 'patients') {
        this.router.navigate(['/patient-dashboard']);  // Make sure this route exists
      }
      // Add other navigation logic for different summary cards if needed
    }
  pieChartOptions: ChartConfiguration<'pie'> = {
    type: 'pie',
    data: {
      labels: this.dataSummary.map(d => d.name),
      datasets: [
        {
          label: 'Storage Size (MB)',
          data: this.dataSummary.map(d => d.size),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
            '#9966FF', '#FF9F40', '#66FF66', '#FF6666'
          ],
        }
      ]
    },
    options: {
      responsive: true
    }
  };

  barChartOptions: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: this.dataSummary.map(d => d.name),
      datasets: [
        {
          label: 'Document Count',
          data: this.dataSummary.map(d => d.count),
          backgroundColor: '#36A2EB'
        }
      ]
    },
    options: {
      responsive: true
    }
  };
}
