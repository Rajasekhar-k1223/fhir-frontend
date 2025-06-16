import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://arkz-health.up.railway.app/api';
  private readonly userKey = 'user-details';
  private readonly roleKey = 'role';
  private platformId = inject(PLATFORM_ID);

  public loggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { identifier: string; password: string }): Observable<any> {
    const params = new HttpParams()
      .set('identifier', credentials.identifier)
      .set('password', credentials.password);

    return this.http.post(`${this.apiUrl}/login`, null, { params }).pipe(
      tap((response: any) => {
        if (response?.access_token && isPlatformBrowser(this.platformId)) {
          localStorage.setItem(this.userKey, JSON.stringify(response));
          localStorage.setItem(this.roleKey, response.role);
          this.loggedIn$.next(true); // Emit login state
        }
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.userKey);
      localStorage.removeItem(this.roleKey);
      this.loggedIn$.next(false); // Emit logout state
    }
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    console.log(isPlatformBrowser(this.platformId) && !!localStorage.getItem(this.userKey))
    return isPlatformBrowser(this.platformId) && !!localStorage.getItem(this.userKey);
  }

  getUser(): any {
    if (!isPlatformBrowser(this.platformId)) return null;
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  getUserRole(): string | null {
    return this.getUser()?.role ?? null;
  }

  getUserName(): string {
    return this.getUser()?.name ?? 'User';
  }
}
