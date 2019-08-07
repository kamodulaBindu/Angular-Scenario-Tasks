import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6Component1Component } from './s6-component1.component';

describe('S6Component1Component', () => {
  let component: S6Component1Component;
  let fixture: ComponentFixture<S6Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
