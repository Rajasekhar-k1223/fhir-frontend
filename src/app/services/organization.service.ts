// src/app/services/organization.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private apiUrl = 'http://localhost:5059/api/Organization'; // Update with real endpoint

  constructor(private http: HttpClient) {}

  getOrganization(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
