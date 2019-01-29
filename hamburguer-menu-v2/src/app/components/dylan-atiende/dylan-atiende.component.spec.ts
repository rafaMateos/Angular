import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DylanAtiendeComponent } from './dylan-atiende.component';

describe('DylanAtiendeComponent', () => {
  let component: DylanAtiendeComponent;
  let fixture: ComponentFixture<DylanAtiendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DylanAtiendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DylanAtiendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
