import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRelatedPersonComponent } from './patient-related-person.component';

describe('PatientRelatedPersonComponent', () => {
  let component: PatientRelatedPersonComponent;
  let fixture: ComponentFixture<PatientRelatedPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientRelatedPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRelatedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
