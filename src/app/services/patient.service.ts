import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientEncounter } from '../components/patient-encounter/patient-encounter.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:5059/api/';

  constructor(private http: HttpClient) { }

  // Fetch all patients
  getPatients(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"Patients", { headers: { 'Accept': 'application/json' } });
  }

  // Fetch patient details by identifier
  fetchPatientDetails(identifier: string): Observable<any> {
    // const url = `${this.apiUrl}/searchById?patientId=${identifier}`;
    const url = `${this.apiUrl}Patients/${identifier}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }
  fetchPatientEncounters(id: string): Observable<any> {
    const url = `${this.apiUrl}Encounters/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }
  fetchPatientObservations(id: string): Observable<any> {
    const url = `${this.apiUrl}Observation/${id}`;
    console.log(url)
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientConditions(id: string): Observable<any> {
    const url = `${this.apiUrl}Condition/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientAllergyIntolerances(id: string): Observable<any> {
    const url = `${this.apiUrl}AllergyIntolerance/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientMedicationRequests(id: string): Observable<any> {
    const url = `${this.apiUrl}MedicationRequests/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientImmunizations(id: string): Observable<any> {
    const url = `${this.apiUrl}Immunizations/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientCarePlans(id: string): Observable<any> {
    const url = `${this.apiUrl}CarePlans/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientProcedures(id: string): Observable<any> {
    const url = `${this.apiUrl}Procedures/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientDiagnosticReports(id: string): Observable<any> {
    const url = `${this.apiUrl}DiagnosticReports/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientAppointments(id: string): Observable<any> {
    const url = `${this.apiUrl}Appointments/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientDocumentReferences(id: string): Observable<any> {
    const url = `${this.apiUrl}DocumentReferences/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientGoals(id: string): Observable<any> {
    const url = `${this.apiUrl}Goals/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientCareTeams(id: string): Observable<any> {
    const url = `${this.apiUrl}CareTeams/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientEpisodeOfCares(id: string): Observable<any> {
    const url = `${this.apiUrl}EpisodeOfCares/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientCoverages(id: string): Observable<any> {
    const url = `${this.apiUrl}Coverages/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }

  fetchPatientRelatedPersons(id: string): Observable<any> {
    const url = `${this.apiUrl}RelatedPersons/by-patient/${id}`;
    return this.http.get<any>(url, { headers: { 'Accept': 'application/json' } });
  }
}
