import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThambweComponent } from './thambwe.component';

describe('ThambweComponent', () => {
  let component: ThambweComponent;
  let fixture: ComponentFixture<ThambweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThambweComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThambweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
