import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCareTeamComponent } from './patient-care-team.component';

describe('PatientCareTeamComponent', () => {
  let component: PatientCareTeamComponent;
  let fixture: ComponentFixture<PatientCareTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCareTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCareTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
