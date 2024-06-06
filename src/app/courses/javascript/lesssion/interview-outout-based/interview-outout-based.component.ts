import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-outout-based',
  templateUrl: './interview-outout-based.component.html',
  styleUrls: ['./interview-outout-based.component.scss']
})
export class InterviewOutoutBasedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
  }

  code: string = ``;

}