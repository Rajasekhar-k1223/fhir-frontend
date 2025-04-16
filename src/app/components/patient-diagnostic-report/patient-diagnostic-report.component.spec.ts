import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiagnosticReportComponent } from './patient-diagnostic-report.component';

describe('PatientDiagnosticReportComponent', () => {
  let component: PatientDiagnosticReportComponent;
  let fixture: ComponentFixture<PatientDiagnosticReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDiagnosticReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDiagnosticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
