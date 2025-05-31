import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  activeRoute: string = '';
  isLoggedIn: boolean = false;
  userName: string = 'User';
  private platformId = inject(PLATFORM_ID);
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const user = {
        name: this.loginForm.value.username,
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/']); // Redirect to default page
    }
  }
  toggleLogin() {
    if (isPlatformBrowser(this.platformId)) { // ✅ Prevents `localStorage` errors
      if (this.isLoggedIn) {
        localStorage.removeItem('user'); // Logout
        this.checkLoginStatus();
        this.router.navigate(['/login']); // ✅ Redirect after logout
      } else {
        localStorage.setItem('user', JSON.stringify({ name: 'John Doe' })); // Simulate login
        this.checkLoginStatus();
        this.router.navigate(['/']);
      }
      this.checkLoginStatus();
    }
}
checkLoginStatus() {
  if (isPlatformBrowser(this.platformId)) { // ✅ Ensures `localStorage` is only accessed in the browser
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
    if (user) {
      this.userName = JSON.parse(user).name || 'User';
    }
  }
}
}
