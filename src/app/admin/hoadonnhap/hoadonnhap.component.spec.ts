import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonnhapComponent } from './hoadonnhap.component';

describe('HoadonnhapComponent', () => {
  let component: HoadonnhapComponent;
  let fixture: ComponentFixture<HoadonnhapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonnhapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonnhapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
