import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HealthcareService } from '../services/healthcare.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgIf, NgFor } from '@angular/common';
import Isotope from 'isotope-layout';

@Component({
  standalone: true,
  selector: 'app-healthcare-service',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    NgIf,
    NgFor
  ],
  templateUrl: './healthcare-service.component.html',
  styleUrls: ['./healthcare-service.component.css']
})
export class HealthcareServiceComponent implements OnInit, AfterViewInit {
  @ViewChild('isotopeContainer', { static: false }) isotopeContainer!: ElementRef;

  healthcareServices: any[] = [];
  visibleDetailIndex: number | null = null;
  isotope: Isotope | null = null;

  constructor(private healthcareService: HealthcareService) {}

  ngOnInit(): void {
    this.healthcareService.getHealthcareServices().subscribe(data => {
      this.healthcareServices = data.map((svc: any) => {
        if (svc.providedBy?.period) {
          svc.providedBy.period = {
            start: svc.providedBy.period?.start ? new Date(svc.providedBy.period.start) : null,
            end: svc.providedBy.period?.end ? new Date(svc.providedBy.period.end) : null
          };
        }
        return svc;
      });

      // Wait briefly for DOM to update, then trigger Isotope
      setTimeout(() => this.initIsotope(), 100);
    });
  }

  ngAfterViewInit(): void {
    if (this.healthcareServices.length > 0) {
      setTimeout(() => this.initIsotope(), 100);
    }
  }

  initIsotope(): void {
    if (this.isotopeContainer) {
      this.isotope = new Isotope(this.isotopeContainer.nativeElement, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry', // <-- Use masonry for vertical flow
        percentPosition: true,
      });
    }
  }

  toggleDetails(index: number): void {
    this.visibleDetailIndex = this.visibleDetailIndex === index ? null : index;
    setTimeout(() => {
      this.isotope?.layout();
    }, 300);
  }

  filterByCategory(categoryClass: string): void {
    if (this.isotope) {
      this.isotope.arrange({ filter: categoryClass });
    }
  }
}
