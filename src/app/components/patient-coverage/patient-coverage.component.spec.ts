import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCoverageComponent } from './patient-coverage.component';

describe('PatientCoverageComponent', () => {
  let component: PatientCoverageComponent;
  let fixture: ComponentFixture<PatientCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCoverageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
