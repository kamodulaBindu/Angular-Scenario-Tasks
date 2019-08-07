import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-s6-component2',
  templateUrl: './s6-component2.component.html',
  styleUrls: ['./s6-component2.component.scss']
})
export class S6Component2Component implements OnInit {

  public message="";
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit(this.message);
  }

}