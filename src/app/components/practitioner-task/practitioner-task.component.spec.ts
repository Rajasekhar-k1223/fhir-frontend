import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerTaskComponent } from './practitioner-task.component';

describe('PractitionerTaskComponent', () => {
  let component: PractitionerTaskComponent;
  let fixture: ComponentFixture<PractitionerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
