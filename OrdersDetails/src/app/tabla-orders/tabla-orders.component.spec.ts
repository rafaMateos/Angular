import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaOrdersComponent } from './tabla-orders.component';

describe('TablaOrdersComponent', () => {
  let component: TablaOrdersComponent;
  let fixture: ComponentFixture<TablaOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
