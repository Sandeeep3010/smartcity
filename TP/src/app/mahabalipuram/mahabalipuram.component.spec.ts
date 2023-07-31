import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahabalipuramComponent } from './mahabalipuram.component';

describe('MahabalipuramComponent', () => {
  let component: MahabalipuramComponent;
  let fixture: ComponentFixture<MahabalipuramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MahabalipuramComponent]
    });
    fixture = TestBed.createComponent(MahabalipuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
