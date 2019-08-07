import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6Component2Component } from './s6-component2.component';

describe('S6Component2Component', () => {
  let component: S6Component2Component;
  let fixture: ComponentFixture<S6Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
