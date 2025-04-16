import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeRoute: string = '';
  isLoggedIn: boolean = false;
  userName: string = 'User';
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects.split('/')[1];
      }
    });

    this.checkLoginStatus();
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

  toggleLogin() {
    if (isPlatformBrowser(this.platformId)) { // ✅ Prevents `localStorage` errors
      if (this.isLoggedIn) {
        localStorage.removeItem('user'); // Logout
      } else {
        localStorage.setItem('user', JSON.stringify({ name: 'John Doe' })); // Simulate login
      }
      this.checkLoginStatus();
    }
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
