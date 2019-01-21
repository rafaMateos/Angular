import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoUIComponent } from './kendo-ui.component';

describe('KendoUIComponent', () => {
  let component: KendoUIComponent;
  let fixture: ComponentFixture<KendoUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
