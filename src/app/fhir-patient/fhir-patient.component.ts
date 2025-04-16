import { Component,OnInit } from '@angular/core';
import { FhirService } from '../fhir.service';
@Component({
  selector: 'app-fhir-patient',
  imports: [],
  templateUrl: './fhir-patient.component.html',
  styleUrl: './fhir-patient.component.css'
})
export class FhirPatientComponent {
  patient:any;

  constructor(private fhirService: FhirService) {
    
  }
  ngOnInit() {
    this.fhirService.getPatient().subscribe(data=>{
      this.patient = data
    })
  }

}
