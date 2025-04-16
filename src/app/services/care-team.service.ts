import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareTeamService {
  private apiUrl = 'http://localhost:5059/api/CareTeam'; // Update this to your real API

  constructor(private http: HttpClient) {}

  getCareTeam(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
