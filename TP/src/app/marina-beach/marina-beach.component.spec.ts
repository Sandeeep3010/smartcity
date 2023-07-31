import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinaBeachComponent } from './marina-beach.component';

describe('MarinaBeachComponent', () => {
  let component: MarinaBeachComponent;
  let fixture: ComponentFixture<MarinaBeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarinaBeachComponent]
    });
    fixture = TestBed.createComponent(MarinaBeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
