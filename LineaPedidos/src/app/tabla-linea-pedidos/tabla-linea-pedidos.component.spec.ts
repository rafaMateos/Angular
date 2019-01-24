import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLineaPedidosComponent } from './tabla-linea-pedidos.component';

describe('TablaLineaPedidosComponent', () => {
  let component: TablaLineaPedidosComponent;
  let fixture: ComponentFixture<TablaLineaPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaLineaPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaLineaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
