import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicationRequestComponent } from './patient-medication-request.component';

describe('PatientMedicationRequestComponent', () => {
  let component: PatientMedicationRequestComponent;
  let fixture: ComponentFixture<PatientMedicationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientMedicationRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientMedicationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
