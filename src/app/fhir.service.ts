import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  private apiUrl = 'http://localhost:5059/api/Patients';

  constructor(private http: HttpClient) {}

  getPatient(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
