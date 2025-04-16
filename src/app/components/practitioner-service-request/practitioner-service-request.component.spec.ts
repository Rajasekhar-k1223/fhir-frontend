import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerServiceRequestComponent } from './practitioner-service-request.component';

describe('PractitionerServiceRequestComponent', () => {
  let component: PractitionerServiceRequestComponent;
  let fixture: ComponentFixture<PractitionerServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerServiceRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
