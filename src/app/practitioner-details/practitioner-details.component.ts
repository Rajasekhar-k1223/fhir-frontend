import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PractitionerService } from '../services/practitioner.service';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-practitioner-details',
  imports: [CommonModule,MatSidenavModule, SideMenuComponent, MatButtonModule],
  templateUrl: './practitioner-details.component.html',
  styleUrl: './practitioner-details.component.css'
})
export class PractitionerDetailsComponent {
  practitionerId: string | null = null;
  practitionerDetails: any = null;
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private practitionerService: PractitionerService
  ) {}

  ngOnInit() {
    this.practitionerId = this.route.snapshot.paramMap.get('id'); // Get practitioner ID from URL
    if (this.practitionerId) {
      console.log(this.practitionerId);
      this.fetchPractitionerDetails(this.practitionerId);
    } else {
      this.errorMessage = "Invalid practitioner ID.";
      this.loading = false;
    }
  }

  // Fetch practitioner details using the service
  fetchPractitionerDetails(id: string) {
    this.practitionerService.fetchPractitionerDetails(id).subscribe(
      (data) => {
        console.log("Received practitioner details", data);
        if (data) {
          const practitioner = data;

          this.practitionerDetails = {
            fullName: `${practitioner.name?.[0]?.text || ''} ${practitioner.name?.[0]?.given?.[0] || ''}`.trim(),
            identifier: practitioner.identifier?.[0]?.value || 'N/A',
            qualification: practitioner.qualification?.[0]?.code?.text || 'N/A',
            lastUpdated: practitioner.meta?.lastUpdated || 'N/A',
          };

          console.log("Practitioner details:", this.practitionerDetails);
        }
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching practitioner details';
        console.error('Fetch error:', error);
        this.loading = false;
      }
    );
  }

  // Navigate back to the practitioner list
  goToPractitionerList() {
    this.router.navigate(['/practitioner']);
  }
}
