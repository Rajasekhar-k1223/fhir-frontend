import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerImmunizationComponent } from './practitioner-immunization.component';

describe('PractitionerImmunizationComponent', () => {
  let component: PractitionerImmunizationComponent;
  let fixture: ComponentFixture<PractitionerImmunizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerImmunizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerImmunizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
