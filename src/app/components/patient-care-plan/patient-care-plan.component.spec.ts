import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCarePlanComponent } from './patient-care-plan.component';

describe('PatientCarePlanComponent', () => {
  let component: PatientCarePlanComponent;
  let fixture: ComponentFixture<PatientCarePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCarePlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCarePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
