import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonteComponent } from './fonte.component';

describe('FonteComponent', () => {
  let component: FonteComponent;
  let fixture: ComponentFixture<FonteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
