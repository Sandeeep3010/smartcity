import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChennaiComponent } from './about-chennai.component';

describe('AboutChennaiComponent', () => {
  let component: AboutChennaiComponent;
  let fixture: ComponentFixture<AboutChennaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutChennaiComponent]
    });
    fixture = TestBed.createComponent(AboutChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
