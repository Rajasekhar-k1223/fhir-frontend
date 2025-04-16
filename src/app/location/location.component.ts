import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from '../services/locations.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-location',
  imports:[CommonModule,MatIconModule,MatButtonModule,MatCardModule,MatGridListModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  locations: any[] = [];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe({
      next: (response) => {
        console.log(response)
        if (Array.isArray(response) && response.length > 0) {
          this.locations = response.map((location: any) => ({
            id: location.id,
            name: location.name,
            type: location.type?.[0]?.text || 'Unknown',
            status: location.status,
            operationalStatus: location.operationalStatus?.code,
            contactName: location.contact?.[0]?.name?.text,
            contactPhone: location.contact?.[0]?.telecom?.[0]?.value,
            address: location.address?.text,
            coordinates: `${location.position?.latitude}, ${location.position?.longitude}`,
            lastUpdated: location.lastUpdated
          }));
        }
      },
      error: (error) => console.error('Error fetching locations:', error),
    });
  }
}
