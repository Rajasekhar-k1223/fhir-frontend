import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGoalComponent } from './patient-goal.component';

describe('PatientGoalComponent', () => {
  let component: PatientGoalComponent;
  let fixture: ComponentFixture<PatientGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
