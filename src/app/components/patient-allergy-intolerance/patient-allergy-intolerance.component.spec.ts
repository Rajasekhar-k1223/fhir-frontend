import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAllergyIntoleranceComponent } from './patient-allergy-intolerance.component';

describe('PatientAllergyIntoleranceComponent', () => {
  let component: PatientAllergyIntoleranceComponent;
  let fixture: ComponentFixture<PatientAllergyIntoleranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAllergyIntoleranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAllergyIntoleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
