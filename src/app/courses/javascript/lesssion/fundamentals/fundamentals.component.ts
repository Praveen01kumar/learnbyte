import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: 'fundamentals of JavaScript', id: "JavaScript_fundamentals" },
      { name: 'Variables and Data Types', id: "Variables_and_Data_TypesJavaScript_fundamentals" },
      { name: 'Operators', id: "Operators_JavaScript_fundamentals" },
      { name: "Control Flow", id: "Control_Flow_JavaScript_fundamentals" },
      { name: "Functions", id: "Functions_JavaScript_fundamentals" },
      { name: 'Events and Event Handling', id: "Events_and_Event_Handling_JavaScript_fundamentals" },
      { name: 'Asynchronous JavaScript', id: "Asynchronous_JavaScript_JavaScript_fundamentals" },
      { name: "Conclusion", id: "Conclusion_JavaScript_fundamentals" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
// Variable declaration and initialization
let greeting = "Hello, World!";

// Data types
let number = 42;
let name = "John";
let isTrue = true;
let fruits = ["apple", "banana", "orange"];
let person = { name: "Alice", age: 30 };
`;

code1: string = `
// Arithmetic operators
let sum = 5 + 3;
let difference = 10 - 4;
let product = 2 * 6;
let quotient = 8 / 2;
let remainder = 15 % 4;

// Comparison operators
let isEqual = (5 === 5); // true
let isGreaterThan = (10 > 5); // true

// Logical operators
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
`;

code2: string = `
// Conditional statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

// Loop statement
for (let i = 0; i < 5; i++) {
    console.log(i);
}
`;

code3: string = `
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression (arrow function)
const add = (a, b) => {
    return a + b;
};
`;

code4: string = `
<!-- HTML element with an event listener -->
<button id="myButton">Click me</button>

<!-- JavaScript code to handle the click event -->
<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button clicked!");
    });
</script>
`;

code5: string = `
// Using promises
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Using async/await
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}