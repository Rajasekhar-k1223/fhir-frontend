import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerDocReferenceComponent } from './practitioner-doc-reference.component';

describe('PractitionerDocReferenceComponent', () => {
  let component: PractitionerDocReferenceComponent;
  let fixture: ComponentFixture<PractitionerDocReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerDocReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerDocReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
