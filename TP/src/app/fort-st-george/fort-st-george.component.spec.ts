import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortStGeorgeComponent } from './fort-st-george.component';

describe('FortStGeorgeComponent', () => {
  let component: FortStGeorgeComponent;
  let fixture: ComponentFixture<FortStGeorgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortStGeorgeComponent]
    });
    fixture = TestBed.createComponent(FortStGeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
