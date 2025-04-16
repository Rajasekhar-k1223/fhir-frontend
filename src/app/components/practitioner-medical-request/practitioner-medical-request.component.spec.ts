import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerMedicalRequestComponent } from './practitioner-medical-request.component';

describe('PractitionerMedicalRequestComponent', () => {
  let component: PractitionerMedicalRequestComponent;
  let fixture: ComponentFixture<PractitionerMedicalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerMedicalRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerMedicalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
