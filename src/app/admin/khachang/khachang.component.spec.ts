import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachangComponent } from './khachang.component';

describe('KhachangComponent', () => {
  let component: KhachangComponent;
  let fixture: ComponentFixture<KhachangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
