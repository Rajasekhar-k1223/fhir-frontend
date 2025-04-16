import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerDiagnosticReportComponent } from './practitioner-diagnostic-report.component';

describe('PractitionerDiagnosticReportComponent', () => {
  let component: PractitionerDiagnosticReportComponent;
  let fixture: ComponentFixture<PractitionerDiagnosticReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerDiagnosticReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerDiagnosticReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
