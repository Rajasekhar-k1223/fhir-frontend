import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerObservationComponent } from './practitioner-observation.component';

describe('PractitionerObservationComponent', () => {
  let component: PractitionerObservationComponent;
  let fixture: ComponentFixture<PractitionerObservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerObservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
