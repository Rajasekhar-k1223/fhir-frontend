import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private apiUrl = 'http://localhost:5059/api/Location'; // Update this to your real API

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
