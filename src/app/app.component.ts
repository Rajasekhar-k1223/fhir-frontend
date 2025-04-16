import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // ✅ Routing
    CommonModule, // ✅ Use instead of BrowserModule
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    HeaderComponent, // ✅ Import HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // ✅ Fixed plural naming
})
export class AppComponent {
  title = 'fhir-frontend';
}
