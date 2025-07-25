import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareServiceComponent } from './healthcare-service.component';

describe('HealthcareServiceComponent', () => {
  let component: HealthcareServiceComponent;
  let fixture: ComponentFixture<HealthcareServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
