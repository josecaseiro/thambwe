import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolcloreComponent } from './folclore.component';

describe('FolcloreComponent', () => {
  let component: FolcloreComponent;
  let fixture: ComponentFixture<FolcloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolcloreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolcloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
