import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareteamComponent } from './careteam.component';

describe('CareteamComponent', () => {
  let component: CareteamComponent;
  let fixture: ComponentFixture<CareteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
