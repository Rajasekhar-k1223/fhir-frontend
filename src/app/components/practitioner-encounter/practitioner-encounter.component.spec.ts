import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerEncounterComponent } from './practitioner-encounter.component';

describe('PractitionerEncounterComponent', () => {
  let component: PractitionerEncounterComponent;
  let fixture: ComponentFixture<PractitionerEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerEncounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
