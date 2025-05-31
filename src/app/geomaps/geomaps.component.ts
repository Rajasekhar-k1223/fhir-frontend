import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { PractitionerService } from '../services/practitioner.service';
import { PatientService } from '../services/patient.service';
import { MarkerItem } from './MarkerItem.Model';

@Component({
  selector: 'app-geomaps',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './geomaps.component.html',
  styleUrl: './geomaps.component.css'
})
export class GeomapsComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 40.741144, lng: -73.982473 };

  Practitionermarkers: MarkerItem[] = [];
  Patientmarkers: MarkerItem[] = [];

  constructor(
    private practitionerService: PractitionerService,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.loadPractitionerMarkers();
    this.loadPatientsMarkers();
  }

  loadPractitionerMarkers(page: number = 1, pageSize: number = 400): void {
    this.practitionerService.getPractitionersMaps(page, pageSize).subscribe({
      next: (response: Record<string, any[]>) => {
        console.log('Practitioner Map markers response:', response);

        if (response && response['US']) {
          this.Practitionermarkers = response['US'].map((item) => {
            const lat = item.position?.lat ?? item.position?.latitude;
            const lng = item.position?.lng ?? item.position?.longitude;

            if (isNaN(lat) || isNaN(lng)) {
              console.warn('Invalid practitioner coordinates:', item);
              return null;
            }

            return {
              position: { lat: Number(lat), lng: Number(lng) },
              label: item.label ?? 'Unknown',
              address: item.address ?? 'No address provided'
            };
          }).filter(Boolean) as MarkerItem[];
        } else {
          console.warn('Unexpected practitioner response format or no US markers');
          this.Practitionermarkers = [];
        }
      },
      error: (error) => {
        console.error('Error loading practitioner map markers:', error);
        this.Practitionermarkers = [];
      }
    });
  }

  loadPatientsMarkers(page: number = 1, pageSize: number = 1000): void {
    this.patientService.getPatientsMaps(page, pageSize).subscribe({
      next: (response: Record<string, any[]>) => {
        console.log('Patient markers response:', response);

        if (response && response['US']) {
          this.Patientmarkers = response['US'].map((item) => {
            const lat = item.position?.lat ?? item.position?.latitude;
            const lng = item.position?.lng ?? item.position?.longitude;

            if (isNaN(lat) || isNaN(lng)) {
              console.warn('Invalid patient coordinates:', item);
              return null;
            }

            return {
              position: { lat: Number(lat), lng: Number(lng) },
              label: item.label ?? 'Unknown',
              address: item.address ?? 'No address provided'
            };
          }).filter(Boolean) as MarkerItem[];
        } else {
          console.warn('Unexpected patient response format or no US markers');
          this.Patientmarkers = [];
        }

        console.log('Patientmarkers:', this.Patientmarkers);
      },
      error: (error) => {
        console.error('Error loading patient markers:', error);
        this.Patientmarkers = [];
      }
    });
  }

  getCountryFromLatLng(lat: number, lng: number): Promise<string | null> {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve) => {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK' && results.length > 0) {
          const countryResult = results[0].address_components.find(component =>
            component.types.includes('country')
          );
          resolve(countryResult?.long_name || null);
        } else {
          resolve(null);
        }
      });
    });
  }
}
