import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentMuseumComponent } from './government-museum.component';

describe('GovernmentMuseumComponent', () => {
  let component: GovernmentMuseumComponent;
  let fixture: ComponentFixture<GovernmentMuseumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GovernmentMuseumComponent]
    });
    fixture = TestBed.createComponent(GovernmentMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
