import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthcareService {
  private apiUrl = 'http://localhost:5059/api/HealthcareService'; // Update with your actual endpoint

  constructor(private http: HttpClient) {}

  getHealthcareServices(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
