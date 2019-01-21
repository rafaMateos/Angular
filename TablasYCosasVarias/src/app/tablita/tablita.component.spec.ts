import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablitaComponent } from './tablita.component';

describe('TablitaComponent', () => {
  let component: TablitaComponent;
  let fixture: ComponentFixture<TablitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
