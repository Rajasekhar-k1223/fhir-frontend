import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProcedureComponent } from './patient-procedure.component';

describe('PatientProcedureComponent', () => {
  let component: PatientProcedureComponent;
  let fixture: ComponentFixture<PatientProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
