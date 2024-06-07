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
  code11: string = `function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);`;
  code12: string = `const arrowFunc = () => arguments.length;
  console.log(arrowFunc(1, 2, 3));`;
  code13: string = `console.log(String.prototype.trimLeft.name === "trimLeft");
  console.log(String.prototype.trimLeft.name === "trimStart");`;
  code14: string = `console.log(Math.max());`;
  code15: string = `console.log(10 == [10]);
  console.log(10 == [[[[[[[10]]]]]]]);`;
  code16: string = `console.log(10 + "10");
  console.log(10 - "10");`;
  code17: string = `console.log([0] == false);
  if ([0]) {
    console.log("I'm True");
  } else {
    console.log("I'm False");
  }`;
  code18: string = `console.log([1, 2] + [3, 4]);`;
  code19: string = `const numbers = new Set([1, 1, 2, 3, 4]);
  console.log(numbers);
  
  const browser = new Set("Firefox");
  console.log(browser);`;
  code20: string = ``;
  code21: string = ``;
  code22: string = ``;
  code23: string = ``;
  code24: string = ``;
  code25: string = ``;
  code26: string = ``;
  code27: string = ``;
  code28: string = ``;
  code29: string = ``;
  code30: string = ``;
  code31: string = ``;
  code32: string = ``;
  code33: string = ``;
  code34: string = ``;
  code35: string = ``;
  code36: string = ``;
  code37: string = ``;
  code38: string = ``;
  code39: string = ``;
  code40: string = ``;
  

}