import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDocReferenceComponent } from './patient-doc-reference.component';

describe('PatientDocReferenceComponent', () => {
  let component: PatientDocReferenceComponent;
  let fixture: ComponentFixture<PatientDocReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDocReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDocReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
