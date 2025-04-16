import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-geomaps',
  standalone: true,
  imports: [ CommonModule,GoogleMapsModule],
  templateUrl: './geomaps.component.html',
  styleUrl: './geomaps.component.css'
})
export class GeomapsComponent {
  zoom = 2.9;
  center: google.maps.LatLngLiteral = { lat: 17.385044, lng: 78.486671 };

  markers = [
    {
      position: { lat: 17.385044, lng: 78.486671 },
      label: 'H',
      title: 'Hyderabad'
    },
    {
      position: { lat: 12.971598, lng: 77.594566 },
      label: 'B',
      title: 'Bangalore'
    }
  ];

}
