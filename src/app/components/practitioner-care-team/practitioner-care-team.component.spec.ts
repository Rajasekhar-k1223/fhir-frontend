import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerCareTeamComponent } from './practitioner-care-team.component';

describe('PractitionerCareTeamComponent', () => {
  let component: PractitionerCareTeamComponent;
  let fixture: ComponentFixture<PractitionerCareTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerCareTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerCareTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
