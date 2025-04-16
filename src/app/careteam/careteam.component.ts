import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareTeamService } from '../services/care-team.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-careteam',
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './careteam.component.html',
  styleUrl: './careteam.component.css'
})
export class CareteamComponent {
  careTeams: any[] = [];
  showDetails: boolean = false;

  constructor(private careTeamService: CareTeamService) {}

  ngOnInit(): void {
    this.careTeamService.getCareTeam().subscribe(data => {
      console.log(data)
      this.careTeams = data.data;
    });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
