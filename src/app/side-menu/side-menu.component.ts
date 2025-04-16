import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatToolbarModule, MatListModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() patientId!: string; // Receive patient ID as input
  @Input() practitionerId!: string; // Receive patient ID as input
  patientMenuItems: any[] = [];
  practitionerMenuItems: any[] = [];
  ngOnChanges() {
    if (this.patientId) {
      this.patientMenuItems = [
        { name: 'Patient Details', link: `/patient-details/${this.patientId}` },
        { name: 'Encounter', link: `/patient-encounter/${this.patientId}` },
        { name: 'Observation', link: `/patient-observation/${this.patientId}` },
        { name: 'Condition', link: `/patient-condition/${this.patientId}` },
        { name: 'Allergy Intolerance', link: `/patient-allergy-intolerance/${this.patientId}` },
        { name: 'Medication Request', link: `/patient-medication-request/${this.patientId}` },
        { name: 'Immunization', link: `/patient-immunization/${this.patientId}` },
        { name: 'Care Plan', link: `/patient-care-plan/${this.patientId}` },
        { name: 'Procedure', link: `/patient-procedure/${this.patientId}` },
        { name: 'Diagnostic Report', link: `/patient-diagnostic-report/${this.patientId}` },
        { name: 'Appointment', link: `/patient-appointment/${this.patientId}` },
        { name: 'Document Reference', link: `/patient-document-reference/${this.patientId}` },
        { name: 'Goal', link: `/patient-goal/${this.patientId}` },
        { name: 'Care Team', link: `/patient-care-team/${this.patientId}` },
        { name: 'Episode Of Care', link: `/patient-episode-of-care/${this.patientId}` },
        { name: 'Coverage', link: `/patient-coverage/${this.patientId}` },
        { name: 'Related Person', link: `/patient-related-person/${this.patientId}` }
      ]

    }
    if(this.practitionerId){
      this.practitionerMenuItems = [
        { name: 'Practitioner Details', link: `/practitioner-details/${this.practitionerId}` },
        { name: 'Encounter', link: `/practitioner-encounter/${this.practitionerId}` },                  // participant.individual
        { name: 'Observation', link: `/practitioner-observation/${this.practitionerId}` },              // performer
        { name: 'Procedure', link: `/practitioner-procedure/${this.practitionerId}` },                  // performer.actor
        { name: 'Medication Request', link: `/practitioner-medication-request/${this.practitionerId}` },// requester
        { name: 'Diagnostic Report', link: `/practitioner-diagnostic-report/${this.practitionerId}` },  // resultsInterpreter
        { name: 'Care Team', link: `/practitioner-care-team/${this.practitionerId}` },                  // participant.member
        { name: 'Appointment', link: `/practitioner-appointment/${this.practitionerId}` },              // participant.actor
        { name: 'Practitioner Role', link: `/practitioner-role/${this.practitionerId}` },               // practitioner
        { name: 'Service Request', link: `/practitioner-service-request/${this.practitionerId}` },      // requester
        { name: 'Immunization', link: `/practitioner-immunization/${this.practitionerId}` },            // performer.actor
        { name: 'Document Reference', link: `/practitioner-document-reference/${this.practitionerId}` },// author
        { name: 'Task', link: `/practitioner-task/${this.practitionerId}` }                             // owner
      ]
    }
  }


}
