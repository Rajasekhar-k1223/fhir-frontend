import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes it a standalone service
})
export class PractitionerService {
  private apiUrl = 'http://localhost:5059/api/Practitioners'; // Adjust API URL if needed

  constructor(private http: HttpClient) {}

  // Fetch all practitioners
  getPractitioners(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }

  getPractitionersMaps(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/map-markers?page=${page}&pageSize=${pageSize}`);
  }

  fetchPractitionerDetails(identifier: string): Observable<any> {
    // const url = `${this.apiUrl}/searchById?patientId=${identifier}`;
    const url = `${this.apiUrl}/${identifier}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }
  fetchPractitionerEncounters(id: string): Observable<any> {
    const url = `${this.apiUrl}Encounters/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerObservations(id: string): Observable<any> {
    const url = `${this.apiUrl}Observations/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerProcedures(id: string): Observable<any> {
    const url = `${this.apiUrl}Procedures/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerMedicationRequests(id: string): Observable<any> {
    const url = `${this.apiUrl}MedicationRequests/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerDiagnosticReports(id: string): Observable<any> {
    const url = `${this.apiUrl}DiagnosticReports/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerCareTeams(id: string): Observable<any> {
    const url = `${this.apiUrl}CareTeams/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerAppointments(id: string): Observable<any> {
    const url = `${this.apiUrl}Appointments/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerRoles(id: string): Observable<any> {
    const url = `${this.apiUrl}PractitionerRoles/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerServiceRequests(id: string): Observable<any> {
    const url = `${this.apiUrl}ServiceRequests/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerImmunizations(id: string): Observable<any> {
    const url = `${this.apiUrl}Immunizations/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerDocumentReferences(id: string): Observable<any> {
    const url = `${this.apiUrl}DocumentReferences/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPractitionerTasks(id: string): Observable<any> {
    const url = `${this.apiUrl}Tasks/by-practitioner/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }
}
