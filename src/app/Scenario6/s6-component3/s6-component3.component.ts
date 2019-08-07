import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s6-component3',
  templateUrl: './s6-component3.component.html',
  styleUrls: ['./s6-component3.component.scss']
})
export class S6Component3Component implements OnInit {
  @Input() public data: string;

  constructor() { }

  ngOnInit() {
  }

}
