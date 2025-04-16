import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEpisodeCareComponent } from './patient-episode-care.component';

describe('PatientEpisodeCareComponent', () => {
  let component: PatientEpisodeCareComponent;
  let fixture: ComponentFixture<PatientEpisodeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientEpisodeCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEpisodeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
