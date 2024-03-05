import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: 'Variable Declaration', id: "Variable_Declaration" },
      { name: 'Initializing a variable', id: "Initializing_a_variable" },
      { name: 'With var keyword', id: "With_var_keyword" },
      { name: "Without var keyword", id: "Without_var_keyword" },
      { name: "Re-Declaring JavaScript Variables", id: "Re_Declaring_JavaScript_Variables" },
      { name: 'Automatic Global Variable', id: "Automatic_Global_Variable" },
      { name: 'Variable assignment', id: "Variable_assignment" },
      { name: 'A note about var', id: "A_note_about_var" },
      { name: 'A note about let', id: "A_note_about_let" },
      { name: 'A note about Const', id: "A_note_about_Const" },
      { name: 'Updating a variable', id: "Updating_a_variable" },
      { name: 'Variable types', id: "Variable_types" },
      { name: 'Differences between var, let, and const', id: "Differences_between_var_let_and_const" },
      { name: 'When to Use var, let, or const?', id: "When_to_Use_var_let_or_const" },
      { name: 'Utilizing Variables', id: "Utilizing_Variables" },
      { name: 'Variable Initialization using the Assignment Operator', id: "Variable_Initialization_using_the_Assignment_Operator" },
      { name: 'JavaScript Variable Names (Identifiers)', id: "JavaScript_Variable_Names_Identifiers_" },
      { name: 'Undefined Variable Value in JavaScript', id: "Undefined_Variable_Value_in_JavaScript" },
      { name: 'A real-life analogy', id: "A_real_life_analogy" },
      { name: 'Declaring twice triggers an error', id: "Declaring_twice_triggers_an_error" },
      { name: 'An aside on variable naming rules', id: "An_aside_on_variable_naming_rules" },
      { name: 'Non-Latin letters are allowed, but not recommended', id: "Non_Latin_letters_are_allowed_but_not_recommended" },
      { name: 'An assignment without use strict', id: "An_assignment_without_use_strict" },
      { name: 'JavaScript Arithmetic', id: "JavaScript_Arithmetic" },
      { name: 'Reuse or create?', id: "Reuse_or_create" },
      { name: 'Just Like Algebra', id: "Just_Like_Algebra" },
      { name: 'One Statement, Many Variables', id: "One_Statement_Many_Variables" },
      { name: 'Value = undefined', id: "Value_equals_undefined" },
      { name: 'What is the Scope of Variables in JavaScript?', id: "What_is_the_Scope_of_Variables_in_Javascript" },
      { name: 'What is Global Scope?', id: "What_is_Global_Scope" },
      { name: 'What is Local Scope?', id: "What_is_Local_Scope" },
      { name: 'What is Block Scope?', id: "What_is_Block_Scope" },
      { name: 'What is Function Scope?', id: "What_is_Function_Scope" },
      { name: 'What is Lexical scope?', id: "What_is_Lexical_scope" },
      { name: 'temporal dead zone', id: "temporal_dead_zone" },
      { name: 'const and let: temporal dead zone', id: "const_and_let_temporal_dead_zone" },
      { name: 'JavaScript Strict Mode for Defining Scope of a Variable', id: "JavaScript_Strict_Mode_for_Defining_Scope_of_a_Variable" },
      { name: 'Life of a Variable in JavaScript', id: "Life_of_a_Variable_in_JavaScript" },
      { name: 'const and immutability', id: "const_and_immutability" },
      { name: 'const and loops', id: "const_and_loops" },
      { name: 'Deciding between const and let', id: "Deciding_between_const_and_let" },
      { name: 'Shadowing variables', id: "Shadowing_variables" },
      { name: 'Why eval()?', id: "Why_eval" },
      { name: 'Terminology: static vs. dynamic', id: "Terminology_static_vs_dynamic" },
      { name: 'Static phenomenon: scopes of variables', id: "Static_phenomenon_scopes_of_variables" },
      { name: 'Dynamic phenomenon: function calls', id: "Dynamic_phenomenon_function_calls" },
      { name: 'Global variables and the global object', id: "Global_variables_and_the_global_object" },
      { name: 'globalThis', id: "globalThis" },
      { name: 'Alternatives to globalThis', id: "Alternatives_to_globalThis" },
      { name: 'Use cases for globalThis', id: "Use_cases_for_globalThis" },
      { name: 'scope and activation', id: "scope_and_activation" },
      { name: 'Function declarations and early activation', id: "Function_declarations_and_early_activation" },
      { name: 'Calling ahead without early activation', id: "Calling_ahead_without_early_activation" },
      { name: 'A pitfall of early activation', id: "A_pitfall_of_early_activation" },
      { name: 'The pros and cons of early activation', id: "The_pros_and_cons_of_early_activation" },
      { name: 'Class declarations are not activated early', id: "Class_declarations_are_not_activated_early" },
      { name: 'var: hoisting (partial early activation)', id: "var_hoisting_partial_early_activation" },
      { name: 'Closures', id: "Closures" },
      { name: 'Bound variables vs. free variables', id: "Bound_variables_vs_free_variables" },
      { name: 'What is a closure?', id: "What_is_a_closure" },
      { name: 'Example: A factory for incrementors', id: "Example_A_factory_for_incrementors" },
      { name: 'Use cases for closures', id: "Use_cases_for_closures" },
    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `var x = 10;`;
  code1: string = `let y = 20;`;
  code2: string = `const z = 30;`;
  code3: string = `
  var age = 25;
  let firstName = "John";
  const PI = 3.14;
  `;
  code4: string = `
var isActive = true; // boolean
let fruits = ["apple", "banana", "orange"]; // array
const person = { name: "Alice", age: 30 }; // object
`;
  code5: string = `
var x = null; // initialized with null
let y = undefined; // initialized with undefined
`;
  code6: string = `var sum = 10 + 20; // initialized with the result of the expression 10 + 20`;
  code7: string = `var variableName = initialValue;`;
  code8: string = `var age = 25;`;
  code9: string = `
  var count;
  count = 10;
  `;
  code10: string = `
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
`;
  code11: string = `
var name = "John";
var name = "Doe";
console.log(name); // Output: Doe
`;
  code12: string = `
function myFunction() {
    var localVar = 100;
    console.log(localVar); // Output: 100

    function innerFunction() {
        console.log(localVar); // Output: 100
    }

    innerFunction();
}

myFunction();
`;
  code13: string = `let variableName = initialValue;`;
  code14: string = `let age = 25;`;
  code15: string = `
  let name = "John";
  name = "Doe";
  console.log(name); // Output: Doe
  `;
  code16: string = `const variableName = initialValue;`;
  code17: string = `const PI = 3.14;`;
  code18: string = `
  const name = "John";
  name = "Doe"; // Throws TypeError: Assignment to constant variable.
  `;
  code19: string = `
  var x = 5;
  var x = 10; // This is a re-declaration
  console.log(x); // Output: 10
  `;
  code20: string = `
  let y = 5;
  let y = 10; // SyntaxError: Identifier 'y' has already been declared
  `;
  code21: string = `
  const z = 5;
  const z = 10; // SyntaxError: Identifier 'z' has already been declared
  `;
  code22: string = `
  var a = 5;

  function foo() {
      var a = 10; // This is a different 'a' variable in the scope of the function
      console.log(a); // Output: 10
  }
  
  foo();
  console.log(a); // Output: 5
  `;
  code23: string = `
  function foo() {
    bar = 10; // Automatic global variable
}

foo();
console.log(bar); // Output: 10
`;
  code24: string = `
  function foo() {
    var bar = 10; // Declared using var
}
`;
  code25: string = `
  "use strict";
  function foo() {
      bar = 10; // Throws ReferenceError: bar is not defined
  }
  `;
  code26: string = `
  var x;
  x = 10;
  `;
  code27: string = `var y = 20;`;
  code28: string = `var a = 30, b = 40, c = 50;`;
  code29: string = `
  var x = 10;
  x = 20; // Reassigning x to a new value
  `;
  code30: string = `
  var counter = 0;
  counter++; // Increment by 1
  console.log(counter); // Output: 1
  
  counter--; // Decrement by 1
  console.log(counter); // Output: 0
  `;
  code31: string = `
  var num = 5;
  num += 3; // Equivalent to num = num + 3
  console.log(num); // Output: 8
  
  num *= 2; // Equivalent to num = num * 2
  console.log(num); // Output: 16
  `;
  code32: string = `
  var [x, y] = [1, 2]; // Array destructuring
  console.log(x); // Output: 1
  console.log(y); // Output: 2
  
  var {name, age} = {name: "John", age: 30}; // Object destructuring
  console.log(name); // Output: John
  console.log(age); // Output: 30
  `;
  code33: string = `
  function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10
}
`;
  code34: string = `
  console.log(x); // Output: undefined
  var x = 5;
  console.log(x); // Output: 5
  `;
  code35: string = `
  var name = "John";
  var name = "Doe";
  console.log(name); // Output: Doe
  `;
  code36: string = `
  var globalVar = "I'm global!";
  function example() {
      console.log(globalVar); // Output: I'm global!
  }
  example();
  `;
  code37: string = `
  function example() {
    if (true) {
        let x = 10;
    }
    console.log(x); // Throws ReferenceError: x is not defined
}
`;
  code38: string = `
  console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  `;
  code39: string = `
  let name = "John";
  let name = "Doe"; // Throws SyntaxError: Identifier 'name' has already been declared
  `;
  code40: string = `
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
`;
  code41: string = `
  const PI = 3.14;
  PI = 3.14159; // Throws TypeError: Assignment to constant variable
  `;
  code42: string = `
  function example() {
    if (true) {
        const x = 10;
    }
    console.log(x); // Throws ReferenceError: x is not defined
}
`;
  code43: string = `const name; // Throws SyntaxError: Missing initializer in const declaration`;
  code44: string = `
  const person = { name: "John", age: 30 };
  person.age = 40; // Valid, modifying object property
  
  const numbers = [1, 2, 3];
  numbers.push(4); // Valid, modifying array
  `;
  code45: string = `
  let counter = 0;
  counter = 10; // Updating the value of counter to 10
  `;
  code46: string = `
  let x = 5;
  x = x + 3; // Adding 3 to the current value of x
  `;
  code47: string = `
  let y = 10;
  y += 5; // Equivalent to: y = y + 5
  `;
  code48: string = `
  let count = 0;
  count++; // Incrementing count by 1
  `;
  code49: string = `
  let person = { name: "John", age: 30 };
  person.age = 40; // Updating the age property of the person object
  `;
  code50: string = `
  let numbers = [1, 2, 3];
  numbers[0] = 10; // Updating the first element of the numbers array to 10
  `;
  code51: string = `
  let num = 10; // Integer
  let pi = 3.14; // Floating-point number
  `;
  code52: string = `
  let name = "John"; // String
  let message = 'Hello, World!'; // String
  `;
  code53: string = `
  let isTrue = true; // Boolean
  let isFalse = false; // Boolean
  `;
  code54: string = `
  let numbers = [1, 2, 3, 4, 5]; // Array of numbers
  let fruits = ["apple", "banana", "orange"]; // Array of strings
  let mixedArray = [1, "two", true]; // Array of mixed types
  `;
  code55: string = `
  let person = {
    name: "John",
    age: 30,
    isEmployed: true
}; // Object
`;
  code56: string = `
  let variable = 10; // Variable holds a number
  variable = "Hello"; // Variable now holds a string
  variable = true; // Variable now holds a boolean
  `;
  code57: string = `
  // Descriptive variable names
  let firstName = "John";
  let lastName = "Doe";
  `;
  code58: string = `
  // CamelCase variable naming
  let numberOfStudents = 25;
  
  // Snake_case variable naming
  let max_attempts_allowed = 3;
  `;
  code59: string = `
// Magic numbers replaced with descriptive variables
const TAX_RATE = 0.2;
let totalPrice = subtotal * (1 + TAX_RATE);
`;
  code60: string = `
  // Constants for configuration values
  const API_URL = "https://api.example.com";
  `;
  code61: string = `
  // Initializing variables with default values
  let isLoggedIn = false;
  `;
  code62: string = `
  function calculateArea(radius) {
    const PI = 3.14; // Scoped to the function
    return PI * radius * radius;
}
`;
  code63: string = `
  (function() {
    // Avoid polluting the global scope
    let localVariable = "Local";
})();
`;
  code64: string = `
  // Destructuring assignment
  const person = { name: "John", age: 30 };
  const { name, age } = person;
  `;
  code65: string = `
  function calculateArea(length, width) {
    const area = length * width; // Avoid shadowing 'area' variable
    return area;
}
`;
  code66: string = `
  let count = 0;
  count++; // Reassigning variables sparingly
  `;
  code67: string = `
  // Documenting complex variable
  const user = {
      // User object properties
      name: "John",
      age: 30
  };
  `;
  code68: string = `
  // Template literals for string interpolation
  const name = "John";
  console.log(\`Hello, \${name}!\`);
`;
  code69: string = `
  // Optimize variable declaration
  function calculateTotal(price, quantity) {
      const total = price * quantity;
      return total;
  }
  `;
  code70: string = `
  // Eliminate unnecessary variables
  console.log("Hello, World!"); // No need for a separate variable
  `;
  code71: string = `
  // Variable scope and lifetime
  function greet() {
      let message = "Hello"; // Scoped to the function
      console.log(message);
  }
  greet();
  `;
  code72: string = `
  // Using variables to enhance readability
  let isValidUser = userLoggedIn && userActive && userVerified;
  `;
  code73: string = `
  // Performance considerations for variable usage
  let result = calculateLongRunningOperation(); // Avoid excessive variable creation in performance-critical sections
  `;
  code74: string = `
  // Refactoring redundant code
  function calculatePrice(quantity, price) {
      return quantity * price;
  }
  `;
  code75: string = `
  // Adhering to best practices
  // Declare variables at the top of the scope
  let firstName, lastName;
  // Initialize variables later in the code
  firstName = "John";
  lastName = "Doe";
  `;
  code76: string = `
  // Testing and refactoring variables
  // Initial implementation
  let result = calculateArea(5, 10);
  
  // Refactored implementation
  let rectangle = { length: 5, width: 10 };
  let area = calculateArea(rectangle.length, rectangle.width);
  `;
  code77: string = `
  // Variable initialization using the assignment operator
  let name = "John";
  let age = 30;
  let isStudent = true;
  let fruits = ["apple", "banana", "orange"];
  let person = { firstName: "John", lastName: "Doe" };
  
  // Outputting the initialized variables
  console.log(name);      // Output: John
  console.log(age);       // Output: 30
  console.log(isStudent); // Output: true
  console.log(fruits);    // Output: ["apple", "banana", "orange"]
  console.log(person);    // Output: { firstName: "John", lastName: "Doe" }
  `;
  code78: string = `
  let firstName = "John";
  let _counter = 0;
  let $totalAmount = 100;
  let camelCaseVariable = true;
  let snake_case_variable = false;
  let MAX_SIZE = 1024;
  `;
  code79: string = `
  // Invalid variable names
  let 123variable;     // Cannot start with a digit
  let my variable;     // Cannot contain spaces
  let my-variable;     // Cannot contain hyphens
  let var;             // Reserved keyword
  let function;        // Reserved keyword
  `;
  code80: string = `
  let x;
  console.log(x); // Output: undefined
  `;
  code81: string = `console.log(y); // Output: Uncaught ReferenceError: y is not defined`;
  code82: string = `
  function myFunction() {
    // No return statement
  }
  
  let result = myFunction();
  console.log(result); // Output: undefined
  `;
  code83: string = `
  let person = { name: "John", age: 30 };
  console.log(person.email); // Output: undefined
  `;
  code84: string = `
  function returnValue() {
    return; // Implicitly returns undefined
  }
  
  console.log(returnValue()); // Output: undefined
  `;
  code85: string = `
  let z;
  if (z === undefined) {
    console.log("z is undefined");
  } else {
    console.log("z is defined");
  }
  `;
  code86: string = ``;


  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}