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

  code1: string = `var car = new Vehicle("Honda", "white", "2010", "UK");
  console.log(car);
  
  function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
  }`;
  code2: string = `function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);`;
  code3: string = `function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();`;
  code4: string = `console.log(0.1 + 0.2 === 0.3);`;
  code5: string = `var y = 1;
  if (function f() {}) {
    y += typeof f;
  }
  console.log(y);`;
  code6: string = `function foo() {
    return;
    {
      message: "Hello World";
    }
  }
  console.log(foo());`;
  code7: string = `var myChars = ["a", "b", "c", "d"];
  delete myChars[0];
  console.log(myChars);
  console.log(myChars[0]);
  console.log(myChars.length);`;
  code8: string = `var array1 = new Array(3);
  console.log(array1);
  
  var array2 = [];
  array2[2] = 100;
  console.log(array2);
  
  var array3 = [, , ,];
  console.log(array3);`;
  code9: string = `const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
  };
  
  console.log(obj.prop1());
  console.log(obj.prop2());
  console.log(obj.prop3());`;
  code10: string = `console.log(1 < 2 < 3);
  console.log(3 > 2 > 1);`;
  code11: string = ``;
  code12: string = ``;

}