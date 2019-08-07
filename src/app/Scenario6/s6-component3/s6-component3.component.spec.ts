import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6Component3Component } from './s6-component3.component';

describe('S6Component3Component', () => {
  let component: S6Component3Component;
  let fixture: ComponentFixture<S6Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
