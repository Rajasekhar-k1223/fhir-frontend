import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import Isotope from 'isotope-layout';

@Component({
  standalone: true,
  selector: 'app-organization',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    NgIf,
    NgFor,
    DatePipe
  ],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit, AfterViewInit {
  @ViewChild('isotopeContainer', { static: false }) isotopeContainer!: ElementRef;

  organization: any[] = [];
  visibleContactIndex: number | null = null;
  isotope: Isotope | null = null;

  constructor(private organizationService: OrganizationService) {}

  ngOnInit(): void {
    this.organizationService.getOrganization().subscribe(data => {
      this.organization = data.map((org: any) => {
        if (org.qualification?.length) {
          org.qualification = org.qualification.map((q: any) => ({
            ...q,
            period: {
              ...q.period,
              start: q.period?.start ? new Date(q.period.start) : null,
              end: q.period?.end ? new Date(q.period.end) : null
            }
          }));
        }
        return org;
      });

      // Trigger Isotope after view updates
      setTimeout(() => this.initIsotope(), 200);
    });
  }

  ngAfterViewInit(): void {
    // Fallback if data already present on init
    if (this.organization.length > 0) {
      setTimeout(() => this.initIsotope(), 200);
    }
  }

  initIsotope(): void {
    if (this.isotopeContainer?.nativeElement) {
      this.isotope = new Isotope(this.isotopeContainer.nativeElement, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
          gutter: 10
        }
      });

      // Force layout to fix initial left alignment
      setTimeout(() => {
        this.isotope?.layout();
      }, 100);
    }
  }

  toggleContact(index: number): void {
    this.visibleContactIndex = this.visibleContactIndex === index ? null : index;

    // Wait for content expand/collapse before re-layout
    setTimeout(() => {
      this.isotope?.layout();
    }, 300);
  }
}
