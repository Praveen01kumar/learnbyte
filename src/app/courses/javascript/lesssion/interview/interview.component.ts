import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }
  block: string = '{}';
  ngOnInit(): void { this.callOninIt(); }
  contentList: RsideBar[] = [];

  callOninIt() {
    const data: RsideBar[] = [
      { name: 'What is javascript ?', id: "What_is_javascript" },
      { name: 'What are the various data types exist in JavaScript?', id: "What_are_the_various_data_types_exist_in_JavaScript" },
      { name: 'what is truthy and falsy values?', id: "what_is_truthy_and_falsy_value" },
      { name: 'What are the possible ways to create objects in JavaScript?', id: "What_are_the_possible_ways_to_create_objects_in_JavaScript" },
      { name: 'What is a prototype chain?', id: "What_is_a_prototype_chain" },
      { name: 'What is the difference between Call, Apply and Bind?', id: "What_is_the_difference_between_Call_Apply_and_Bind" },
      { name: 'what is "this" in Javascript?', id: 'what_is_this_in_Javascript' },
      { name: 'What is JSON and its common operations?', id: "What_is_JSON_and_its_common_operations" },
      { name: 'What is the purpose of the array slice method?', id: "What_is_the_purpose_of_the_array_slice_method" },
      { name: 'What is the purpose of the array splice method?', id: "What_is_the_purpose_of_the_array_splice_method" },
      { name: 'what is the difference between slice and splice?', id: "what_is_the_difference_between_slice_and_splice" },
      { name: 'How do you compare Object and Map?', id: "How_do_you_compare_Object_and_Map" },
      { name: 'What are lambda expressions or arrow functions?', id: "What_are_lambda_expressions_or_arrow_functions" },
      { name: 'What is a first class function?', id: "What_is_a_first_class_function" },
      { name: 'What is a first order function?', id: "What_is_a_first_order_function" },
      { name: 'What is a higher order function?', id: "What_is_a_higher_order_function" },
      { name: 'What is a unary function?', id: "What_is_a_unary_function" },
      { name: 'What is the currying function?', id: "What_is_the_currying_function" },
      { name: 'What is a pure function?', id: "What_is_a_pure_function" },
      { name: 'What is the purpose of the let keyword?', id: "What_is_the_purpose_of_the_let_keyword" },
      { name: 'What is the difference between let and var?', id: "What_is_the_difference_between_let_and_var" },
      { name: 'How do you redeclare variables in a switch block without an error?', id: "How_do_you_redeclare_variables_in_a_switch_block_without_an_error" },
      { name: 'What is the Temporal Dead Zone?', id: "What_is_the_Temporal_Dead_Zone" },
      { name: 'What is an IIFE (Immediately Invoked Function Expression)?', id: "What_is_an_IIFE_Immediately_Invoked_Function_Expression" },
      { name: 'How do you decode or encode a URL in JavaScript?', id: "How_do_you_decode_or_encode_a_URL_in_JavaScript" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
    this.contentList = data;
  }

  code: string = `if ('hello') {
    console.log('This will be executed'); // 'hello' is a truthy value
}

if (42) {
    console.log('This will be executed'); // 42 is a truthy value
}

if ({}) {
    console.log('This will be executed'); // An empty object is a truthy value
}

if ([]) {
  console.log('This will be executed'); // An empty array is a truthy value
}
`;
  code1: string = `if (false) {
    console.log('This will not be executed'); // false is a falsy value
}

if (0) {
    console.log('This will not be executed'); // 0 is a falsy value
}

if (null) {
    console.log('This will not be executed'); // null is a falsy value
}

if (undefined) {
    console.log('This will not be executed'); // undefined is a falsy value
}

if ('') {
    console.log('This will not be executed'); // An empty string is a falsy value
}

if (NaN) {
    console.log('This will not be executed'); // NaN is a falsy value
}
`;
  code2: string = `let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
`;
  code3: string = `function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person('John', 30, 'New York');
`;
  code4: string = `let personPrototype = {
    greet: function() {
        console.log('Hello!');
    }
};

let person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
`;
  code5: string = `var object = new Object();`;
  code6: string = `var object = Object();`;
  code7: string = `function Person() {}
  Person.prototype.name = "Sudheer";
  var object = new Person();`;
  code8: string = `function func() {}

  new func(x, y, z);`;
  code9: string = `// Create a new instance using function prototype.
  var newInstance = Object.create(func.prototype)
  
  // Call the function
  var result = func.call(newInstance, x, y, z),
  
  // If the result is a non-null object then use it otherwise just use the new instance.
  console.log(result && typeof result === 'object' ? result : newInstance);`;
  code10: string = `const orgObject = { company: 'XYZ Corp'};
  const carObject = { name: 'Toyota'};
  const staff = Object.assign({}, orgObject, carObject);`;
  code11: string = `class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let person1 = new Person('John', 30, 'New York');
`;
  code12: string = `function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}

let person1 = createPerson('John', 30, 'New York');
`;
  code13: string = `var object = new (function () {
    this.name = "Sudheer";
  })();`;
  code14: string = `// Create a parent object
  let parent = {
      greet: function() {
          console.log('Hello!');
      }
  };
  
  // Create a child object with parent as its prototype
  let child = Object.create(parent);
  child.name = 'John';
  
  // Access a property/method on the child object
  console.log(child.name);   // Output: John
  child.greet();             // Output: Hello!
  
  // If a property/method is not found on the child object, JavaScript looks up the prototype chain
  // In this case, the greet() method is found on the parent object
  `;
  code15: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

person.greet.call(anotherPerson); // Output: Hello, Alice!
`;
  code16: string = `let person = {
    name: 'John',
    greet: function(greeting) {
        console.log('\${greeting}, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

person.greet.apply(anotherPerson, ['Hi']); // Output: Hi, Alice!
`;
  code17: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

let greetAnotherPerson = person.greet.bind(anotherPerson);
greetAnotherPerson(); // Output: Hello, Alice!
`;
  code18: string = `console.log(this === window); // Output: true`;
  code19: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

person.greet(); // Output: Hello, John!
`;
  code20: string = `function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log('Hello, \${this.name}!');
    };
}

let john = new Person('John');
john.greet(); // Output: Hello, John!
`;
  code21: string = `let person1 = { name: 'John' };
  let person2 = { name: 'Alice' };
  
  function greet() {
      console.log('Hello, \${this.name}!');
  }
  
  greet.call(person1); // Output: Hello, John!
  greet.call(person2); // Output: Hello, Alice!
  `;
  code22: string = `let person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log('Hello, \${this.name}!');
        }, 1000);
    }
};

person.greet(); // Output: Hello, John!
`;
  code23: string = `JSON.parse(text);`;
  code24: string = `JSON.stringify(object);`;
  code25: string = `let numbers = [1, 2, 3, 4, 5];
  let slicedNumbers = numbers.slice(1, 4);
  console.log(slicedNumbers); // Output: [2, 3, 4]
  `;
  code26: string = `let originalArray = [1, 2, 3];
  let copiedArray = originalArray.slice();
  console.log(copiedArray); // Output: [1, 2, 3]
  console.log(originalArray === copiedArray); // Output: false (different array references)
  `;
  code27: string = `let numbers = [1, 2, 3, 4, 5];
  let lastThreeNumbers = numbers.slice(-3);
  console.log(lastThreeNumbers); // Output: [3, 4, 5]
  `;
  code28: string = `let numbers = [1, 2, 3, 4, 5];
  let elementsAfterIndex2 = numbers.slice(2);
  console.log(elementsAfterIndex2); // Output: [3, 4, 5]
  `;
  code29: string = `let str = 'Hello, world!';
  let slicedStr = str.slice(7);
  console.log(slicedStr); // Output: world!
  `;
  code30: string = `let emptyArray = [];
  let newArray = emptyArray.slice();
  console.log(newArray); // Output: []
  `;
  code31: string = `array.splice(startIndex, deleteCount, item1, item2, ...);`;
  code32: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 2); // Removes 2 elements starting from index 2
  console.log(numbers); // Output: [1, 2, 5]
  `;
  code33: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 2, 'a', 'b', 'c'); // Removes 2 elements starting from index 2 and adds 'a', 'b', 'c'
  console.log(numbers); // Output: [1, 2, 'a', 'b', 'c', 5]
  `;
  code34: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 0, 'x', 'y'); // Inserts 'x', 'y' at index 2 without removing any elements
  console.log(numbers); // Output: [1, 2, 'x', 'y', 3, 4, 5]
  `;
  code35: string = `let numbers = [1, 2, 3, 4, 5];
  let removedElements = numbers.splice(2, 2);
  console.log(removedElements); // Output: [3, 4]
  console.log(numbers); // Output: [1, 2, 5]
  `;
  code36: string = `let originalArray = [1, 2, 3, 4, 5];
  let slicedArray = originalArray.slice(1, 4);
  console.log(slicedArray); // Output: [2, 3, 4]
  console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
  `;
  code37: string = `let originalArray = [1, 2, 3, 4, 5];
  let removedElements = originalArray.splice(1, 2);
  console.log(removedElements); // Output: [2, 3] (removed elements)
  console.log(originalArray); // Output: [1, 4, 5] (original array modified)
  `;
  code38: string = `const arrowFunc1 = (a, b) => a + b; // Multiple parameters
  const arrowFunc2 = a => a * 10; // Single parameter
  const arrowFunc3 = () => {} // no parameters`;
  code39: string = `const handler = () => console.log("This is a click handler function");
  document.addEventListener("click", handler);`;
  code40: string = `const firstOrder = () => console.log("I am a first order function!");`;
  code41: string = `const firstOrderFunc = () =>
    console.log("Hello, I am a First order function");
  const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
  higherOrder(firstOrderFunc);`;
  code42: string = `const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value`;
  code43: string = `const multiArgFunction = (a, b, c) => a + b + c;
  console.log(multiArgFunction(1, 2, 3)); // 6
  
  const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
  curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
  curryUnaryFunction(1)(2); // returns a function: c => 3 + c
  curryUnaryFunction(1)(2)(3); // returns the number 6`;
  code44: string = `//Impure
  let numberArray = [];
  const impureAddNumber = (number) => numberArray.push(number);
  //Pure
  const pureAddNumber = (number) => (argNumberArray) =>
    argNumberArray.concat([number]);
  
  //Display the results
  console.log(impureAddNumber(6)); // returns 1
  console.log(numberArray); // returns [6]
  console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
  console.log(numberArray); // returns [6]`;
  code45: string = `let counter = 30;
  if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
  }
  console.log(counter); // 30 (because the variable in if block won't exist here)`;
  code46: string = `function userDetails(username) {
    if (username) {
      console.log(salary); // undefined due to hoisting
      console.log(age); // ReferenceError: Cannot access 'age' before initialization
      let age = 30;
      var salary = 10000;
    }
    console.log(salary); //10000 (accessible due to function scope)
    console.log(age); //error: age is not defined(due to block scope)
  }
  userDetails("John");`;
  code47: string = `let counter = 1;
  switch (x) {
    case 0:
      let name;
      break;
  
    case 1:
      let name; // SyntaxError for redeclaration.
      break;
  }`;
  code48: string = `let counter = 1;
  switch (x) {
    case 0: {
      let name;
      break;
    }
    case 1: {
      let name; // No SyntaxError for redeclaration.
      break;
    }
  }`;
  code49: string = `function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }`;
  code50: string = `(function () {
    // logic here
  })();`;
  code51: string = `(function () {
    var message = "IIFE";
    console.log(message);
  })();
  console.log(message); //Error: message is not defined`;
  code52: string = `let uri = "employeeDetails?name=john&occupation=manager";
  let encoded_uri = encodeURI(uri);
  let decoded_uri = decodeURI(encoded_uri);`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
  scroll(id: string, duration: number = 200) {
    const element = document.querySelector(id);
    if (element) {
      const startTime = performance.now();
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = element.getBoundingClientRect().top + startPosition - 50;
      const scrollStep = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);
        if (progress < 1) { window.requestAnimationFrame(scrollStep); }
      };
      window.requestAnimationFrame(scrollStep);
    }
  }


}
