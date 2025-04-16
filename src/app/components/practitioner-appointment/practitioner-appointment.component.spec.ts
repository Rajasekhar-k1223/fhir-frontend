import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerAppointmentComponent } from './practitioner-appointment.component';

describe('PractitionerAppointmentComponent', () => {
  let component: PractitionerAppointmentComponent;
  let fixture: ComponentFixture<PractitionerAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
