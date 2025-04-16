import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerProcedureComponent } from './practitioner-procedure.component';

describe('PractitionerProcedureComponent', () => {
  let component: PractitionerProcedureComponent;
  let fixture: ComponentFixture<PractitionerProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerProcedureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
