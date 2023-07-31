import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuindyNationalParkComponent } from './guindy-national-park.component';

describe('GuindyNationalParkComponent', () => {
  let component: GuindyNationalParkComponent;
  let fixture: ComponentFixture<GuindyNationalParkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuindyNationalParkComponent]
    });
    fixture = TestBed.createComponent(GuindyNationalParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
