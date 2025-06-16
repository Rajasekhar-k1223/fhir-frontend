import { Component, inject, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PLATFORM_ID } from '@angular/core';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  activeRoute: string = '';
  isLoggedIn: boolean = false;
  userName: string = 'User';
  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router, private auth: AuthService) {
    // Watch for route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.urlAfterRedirects.split('/').pop() || '';
      });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 1;
  }

  ngOnInit(): void {
    console.log(isPlatformBrowser(this.platformId))
    if (isPlatformBrowser(this.platformId)) {
      // Reactive login state from auth service
      this.auth.loggedIn$.subscribe((status) => {
        console.log(status)
        this.isLoggedIn = status;
        this.userName = this.auth.getUserName();
      });

      // Initial load
      this.isLoggedIn = this.auth.isLoggedIn();
      this.userName = this.auth.getUserName();
    }
  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  logOut() {
    this.auth.logout(); // Handles both localStorage cleanup and redirection
  }
}
