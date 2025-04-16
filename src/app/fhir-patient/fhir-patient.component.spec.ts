import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirPatientComponent } from './fhir-patient.component';

describe('FhirPatientComponent', () => {
  let component: FhirPatientComponent;
  let fixture: ComponentFixture<FhirPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FhirPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhirPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
