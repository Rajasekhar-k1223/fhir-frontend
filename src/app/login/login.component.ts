import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  activeRoute: string = '';
  isLoggedIn: boolean = false;
  userName: string = 'User';
  private platformId = inject(PLATFORM_ID);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('Login success:', response);

          localStorage.setItem('token', response.token || '');

          const userInfo = {
            name: response.user?.name || credentials.identifier,
          };

          localStorage.setItem('user', JSON.stringify(userInfo));
          localStorage.setItem('user-details', JSON.stringify(response));
          this.checkLoginStatus();
          // this.router.navigate(['/']);
          const role = response.role?.toLowerCase();

        // Save role to localStorage if needed
        localStorage.setItem('user_role', role);
        console.log(role)
        // Navigate based on role
        localStorage.setItem("user_details", JSON.stringify(response))
        switch (role) {
          case 'super-admin':
            this.router.navigate(['/superadmin']);
            break;
          case 'admin':
            this.router.navigate(['/organizationDashboard']);
            break;
          case 'patient':
            this.router.navigate(['/patient-dashboard']);
            break;
          case 'doctor':
            this.router.navigate(['/practitioner']);
            break;
          default:
            this.router.navigate(['/login']); // fallback
        }
        },
        error: (err) => {
          console.error('Login failed:', err);
          alert('Login failed. Please check your credentials.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  toggleLogin() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isLoggedIn) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.checkLoginStatus();
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('user', JSON.stringify({ name: 'Guest' }));
        this.checkLoginStatus();
        this.router.navigate(['/']);
      }
    }
  }

  checkLoginStatus() {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      this.isLoggedIn = !!user;
      if (user) {
        this.userName = JSON.parse(user).name || 'User';
      }
    }
  }
}
