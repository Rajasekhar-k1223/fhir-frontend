import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomapsComponent } from './geomaps.component';

describe('GeomapsComponent', () => {
  let component: GeomapsComponent;
  let fixture: ComponentFixture<GeomapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeomapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeomapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
