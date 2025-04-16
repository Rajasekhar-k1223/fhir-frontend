import { Component } from '@angular/core';
import { CareteamComponent } from './app/careteam/careteam.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter,withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PatientComponent } from './app/patient/patient.component';
import { PatientDetailsComponent } from './app/patient-details/patient-details.component';
import { PatientEncounterComponent } from './app/components/patient-encounter/patient-encounter.component';
import { PatientConditionComponent } from './app/components/patient-condition/patient-condition.component';
import { PatientObservationComponent } from './app/components/patient-observation/patient-observation.component';
import { PatientMedicationRequestComponent } from './app/components/patient-medication-request/patient-medication-request.component';
import { PractitionerComponent } from './app/practitioner/practitioner.component';
import { PractitionerDetailsComponent } from './app/practitioner-details/practitioner-details.component';
import { PractitionerEncounterComponent } from './app/components/practitioner-encounter/practitioner-encounter.component';
import { PatientAllergyIntoleranceComponent } from './app/components/patient-allergy-intolerance/patient-allergy-intolerance.component';
import { PatientImmunizationComponent } from './app/components/patient-immunization/patient-immunization.component';
import { PatientCarePlanComponent } from './app/components/patient-care-plan/patient-care-plan.component';
import { PatientDiagnosticReportComponent } from './app/components/patient-diagnostic-report/patient-diagnostic-report.component';
import { PatientProcedureComponent } from './app/components/patient-procedure/patient-procedure.component';
import { PatientAppointmentComponent } from './app/components/patient-appointment/patient-appointment.component';
import { PatientCareTeamComponent } from './app/components/patient-care-team/patient-care-team.component';
import { PatientDocReferenceComponent } from './app/components/patient-doc-reference/patient-doc-reference.component';
import { PatientGoalComponent } from './app/components/patient-goal/patient-goal.component';
import { PatientEpisodeCareComponent } from './app/components/patient-episode-care/patient-episode-care.component';
import { PatientCoverageComponent } from './app/components/patient-coverage/patient-coverage.component';
import { PatientRelatedPersonComponent } from './app/components/patient-related-person/patient-related-person.component';
import { PractitionerObservationComponent } from './app/components/practitioner-observation/practitioner-observation.component';
import { PractitionerProcedureComponent } from './app/components/practitioner-procedure/practitioner-procedure.component';
import { PractitionerMedicalRequestComponent } from './app/components/practitioner-medical-request/practitioner-medical-request.component';
import { PractitionerCareTeamComponent } from './app/components/practitioner-care-team/practitioner-care-team.component';
import { PractitionerDiagnosticReportComponent } from './app/components/practitioner-diagnostic-report/practitioner-diagnostic-report.component';
import { PractitionerAppointmentComponent } from './app/components/practitioner-appointment/practitioner-appointment.component';
import { PractitionerRoleComponent } from './app/components/practitioner-role/practitioner-role.component';
import { PractitionerServiceRequestComponent } from './app/components/practitioner-service-request/practitioner-service-request.component';
import { PractitionerImmunizationComponent } from './app/components/practitioner-immunization/practitioner-immunization.component';
import { PractitionerDocReferenceComponent } from './app/components/practitioner-doc-reference/practitioner-doc-reference.component';
import { PractitionerTaskComponent } from './app/components/practitioner-task/practitioner-task.component';
import { DeviceComponent } from './app/device/device.component';
import { OrganizationComponent } from './app/organization/organization.component';
import { LocationComponent } from './app/location/location.component';
import { HealthcareServiceComponent } from './app/healthcare-service/healthcare-service.component';
import { GeomapsComponent } from './app/geomaps/geomaps.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'patient', pathMatch: 'full' }, // ✅ No leading slash
      { path: 'patient', component: PatientComponent }, // ✅ No leading slash
      { path: 'practitioner', component: PractitionerComponent }, // ✅ No leading slash
      { path: 'patient-details/:id', component: PatientDetailsComponent }, // Patient details route
      { path: 'patient-encounter/:id', component: PatientEncounterComponent }, // Encounter route
      { path: 'patient-observation/:id', component: PatientObservationComponent }, // Observation route
      { path: 'patient-condition/:id', component: PatientConditionComponent }, // Condition route
      { path: 'patient-allergy-intolerance/:id', component: PatientAllergyIntoleranceComponent }, // Allergy Intolerance route
      { path: 'patient-medication-request/:id', component: PatientMedicationRequestComponent }, // Medication Request route
      { path: 'patient-immunization/:id', component: PatientImmunizationComponent }, // Immunization route
      { path: 'patient-care-plan/:id', component: PatientCarePlanComponent }, // Care Plan route
      { path: 'patient-procedure/:id', component: PatientProcedureComponent }, // Procedure route
      { path: 'patient-diagnostic-report/:id', component: PatientDiagnosticReportComponent }, // Diagnostic Report route
      { path: 'patient-appointment/:id', component: PatientAppointmentComponent }, // Appointment route
      { path: 'patient-document-reference/:id', component: PatientDocReferenceComponent }, // Document Reference route
      { path: 'patient-goal/:id', component: PatientGoalComponent }, // Goal route
      { path: 'patient-care-team/:id', component: PatientCareTeamComponent }, // Care Team route
      { path: 'patient-episode-of-care/:id', component: PatientEpisodeCareComponent }, // Episode Of Care route
      { path: 'patient-coverage/:id', component: PatientCoverageComponent }, // Coverage route
      { path: 'patient-related-person/:id', component: PatientRelatedPersonComponent }, // Related Person route
      { path: 'practitioner-details/:id', component: PractitionerDetailsComponent }, // Practitioner details route
      { path: 'practitioner-encounter/:id', component: PractitionerEncounterComponent }, // Encounter (participant.individual)
      { path: 'practitioner-observation/:id', component: PractitionerObservationComponent }, // Observation (performer)
      { path: 'practitioner-procedure/:id', component: PractitionerProcedureComponent }, // Procedure (performer.actor)
      { path: 'practitioner-medication-request/:id', component: PractitionerMedicalRequestComponent }, // MedicationRequest (requester)
      { path: 'practitioner-diagnostic-report/:id', component: PractitionerDiagnosticReportComponent }, // DiagnosticReport (resultsInterpreter)
      { path: 'practitioner-care-team/:id', component: PractitionerCareTeamComponent }, // CareTeam (participant.member)
      { path: 'practitioner-appointment/:id', component: PractitionerAppointmentComponent }, // Appointment (participant.actor)
      { path: 'practitioner-role/:id', component: PractitionerRoleComponent }, // PractitionerRole (practitioner)
      { path: 'practitioner-service-request/:id', component: PractitionerServiceRequestComponent }, // ServiceRequest (requester)
      { path: 'practitioner-immunization/:id', component: PractitionerImmunizationComponent }, // Immunization (performer.actor)
      { path: 'practitioner-document-reference/:id', component: PractitionerDocReferenceComponent }, // DocumentReference (author)
      { path: 'practitioner-task/:id', component: PractitionerTaskComponent }, // Task
      { path:'careteam',component:CareteamComponent },
      { path:'device',component:DeviceComponent },
      { path:'organization',component:OrganizationComponent },
      { path:'location',component:LocationComponent },
      { path:'healthcare-service',component:HealthcareServiceComponent },
      { path:'geomaps',component:GeomapsComponent }

    ],withHashLocation()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
