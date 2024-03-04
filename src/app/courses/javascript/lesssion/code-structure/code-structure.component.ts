import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-code-structure',
  templateUrl: './code-structure.component.html',
  styleUrls: ['./code-structure.component.scss']
})
export class CodeStructureComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "structure of code in JavaScript", id: "structure_of_code_in_JavaScript" },
      { name: "Overview of JavaScript Code Structure", id: "Overview_of_JavaScript_Code_Structure" },
      { name: 'Statements', id: "Statements" },
      { name: "Whitespace", id: "Whitespace" },
      { name: "Comments", id: "Comments" },
      { name: "Best Practices for Code Structure", id: "Best_Practices_for_Code_Structure" },
      { name: "Conclusion", id: "Conclusion_Code_Structure" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
  // Example of variable declaration statement
  let message = "Hello, World!";
  
  // Example of if statement
  if (condition) {
      // Code block executed if condition is true
  } else {
      // Code block executed if condition is false
  }
  
  // Example of function declaration statement
  function greet(name) {
      return "Hello, " + name + "!";
  }
  `;

code1: string = `
// Example of properly indented code
function calculateSum(a, b) {
    return a + b;
}

// Example of poorly indented code
function calculateSum(a, b) {
return a + b;
}
`;

code2: string = `
// Single-line comment
let result = calculateSum(3, 5); // Calculate sum of 3 and 5

/*
 Multi-line comment
 This function returns the sum of two numbers
*/
function calculateSum(a, b) {
    return a + b;
}
`;

code3: string = `
// Example of using semicolons to terminate statements
let greeting = "Hello"; // Semicolon terminates the statement
console.log(greeting);   // Output: Hello
`;

code4: string = `
/* This is a valid multi-line comment */

/* Nested comments are not supported in JavaScript
   /* This will cause a syntax error */
*/
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}