import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUI } from './kendo-ui.component';

describe('KendoUIComponent', () => {
  let component: KendoUI;
  let fixture: ComponentFixture<KendoUI>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUI ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
