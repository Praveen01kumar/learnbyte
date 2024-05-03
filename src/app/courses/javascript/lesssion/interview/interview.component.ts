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
      { name: 'What is memoization?', id: "What_is_memoization" },
      { name: 'Explain each Hoisting, TDZ, lexical scope, Closure, Variable Scope, Function Scope with example?', id: "Explain_each_Hoisting_TDZ_lexical_scope_Closure_Variable_Scop_Function_Scope_with_example" },
      { name: 'What are classes in ES6?', id: "What_are_classes_in_ES6" },
      { name: 'What are modules and Why do you need modules?', id: "What_are_modules_and_Why_do_you_need_modules" },
      { name: 'What is scope in javascript?', id: "What_is_scope_in_javascript" },
      { name: 'What is a service worker?', id: "What_is_a_service_worker" },
      { name: 'How do you manipulate DOM using a service worker?', id: "How_do_you_manipulate_DOM_using_a_service_worker" },
      { name: 'How do you reuse information across service worker restarts?', id: "How_do_you_reuse_information_across_service_worker_restarts" },
      { name: 'What is IndexedDB?', id: "What_is_IndexedDB" },
      { name: 'What is web storage?', id: "What_is_web_storage" },
      { name: 'What is a post message?', id: "What_is_a_post_message" },
      { name: 'What is a Cookie?', id: "What_is_a_Cookie" },
      { name: 'Which types of storage are available in browser?', id: "Which_types_of_storage_are_available_in_browser" },
      { name: 'What are the options in a cookie?', id: "What_are_the_options_in_a_cookie" },
      { name: 'How do you delete a cookie?', id: "How_do_you_delete_a_cookie" },
      { name: 'What are the differences between cookie, local storage and session storage?', id: "What_are_the_differences_between_cookie_local_storage_and_session_storage" },
      { name: 'How do you check web storage browser support?', id: "How_do_you_check_web_storage_browser_support" },
      { name: 'How do you check web workers browser support?', id: "How_do_you_check_web_workers_browser_support" },
      { name: 'Give an example of a web worker?', id: "Give_an_example_of_a_web_worker" },
      { name: 'What are the restrictions of web workers on DOM?', id: "What_are_the_restrictions_of_web_workers_on_DOM" },
      { name: 'In JavaScript how many possible ways are there to handle asynchronous operations?', id: "in_javascript_how_many_possible_ways_are_there_to_handle_asynchronous_operations" },
      { name: 'In Rxjs how many possible ways are there to handle asynchronous operations?', id: "In_Rxjs_how_many_possible_ways_are_there_to_handle_asynchronous_operations" },
      { name: 'What is a callback hell?', id: "What_is_a_callback_hell" },
      { name: 'What are server-sent events?', id: "What_are_server_sent_events" },
      { name: 'How do you receive server-sent event notifications?', id: "How_do_you_receive_server_sent_event_notifications" },
      { name: 'How do you check browser support for server-sent events?', id: "How_do_you_check_browser_support_for_server_sent_events" },
      { name: 'What are the events available for server sent events?', id: "What_are_the_events_available_for_server_sent_events" },
      { name: 'What are the main rules of promise?', id: "What_are_the_main_rules_of_promise" },
      { name: 'What is callback in callback?', id: "What_is_callback_in_callback" },
      { name: 'What is promise chaining?', id: "What_is_promise_chaining" },
      { name: 'What is promise.all?', id: "What_is_promise_all" },
      { name: 'What is the purpose of the race method in promise?', id: "What_is_the_purpose_of_the_race_method_in_promise" },
      { name: 'What is a strict mode in javascript?', id: "What_is_a_strict_mode_in_javascript" },
      { name: 'Why do you need strict mode?', id: "Why_do_you_need_strict_mode" },
      { name: 'How do you declare strict mode?', id: "How_do_you_declare_strict_mode" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
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
  code53: string = `const memoizAddition = () => {
    let cache = {};
    return (value) => {
      if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
      }
    };
  };
  // returned function from memoizAddition
  const addition = memoizAddition();
  console.log(addition(20)); //output: 40 calculated
  console.log(addition(20)); //output: 40 cached`;
  code54: string = `console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
  `;
  code55: string = `var x;
  console.log(x);
  x = 5;
  console.log(x);
  `;
  code56: string = `console.log(x); // Throws ReferenceError
  let x = 5;
  `;
  code57: string = `let a = 10;
  function myFunction() {
      console.log(a); // 10
  }
  myFunction();
  `;
  code58: string = `function outerFunction() {
    let outerVariable = 20;
    function innerFunction() {
        console.log(outerVariable); // 20
    }
    return innerFunction;
}
let innerFunc = outerFunction();
innerFunc();
`;
  code59: string = `// Global scope
  let globalVar = "I am global";
  
  function outerFunction() {
      // Function scope
      let outerVar = "I am outer";
      console.log(globalVar); // Accessible
      console.log(outerVar); // Accessible
  
      function innerFunction() {
          // Inner function scope
          let innerVar = "I am inner";
          console.log(globalVar); // Accessible
          console.log(outerVar); // Accessible
          console.log(innerVar); // Accessible
      }
  
      innerFunction();
      // console.log(innerVar); // Error: innerVar is not defined
  }
  
  outerFunction();
  // console.log(outerVar); // Error: outerVar is not defined
  `;
  code60: string = `function outerFunction() {
    let outerVar = "I am outer";
    console.log(outerVar); // Accessible

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(innerVar); // Accessible
    }

    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
// console.log(outerVar); // Error: outerVar is not defined
`;
  code61: string = `function Bike(model, color) {
    this.model = model;
    this.color = color;
  }
  
  Bike.prototype.getDetails = function () {
    return this.model + " bike has" + this.color + " color";
  };`;
  code62: string = `class Bike {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    getDetails() {
      return this.model + " bike has" + this.color + " color";
    }
  }`;
  code63: string = `document.cookie = "username=John";`;
  code64: string = `localStorage.setItem('key', 'value');
  let value = localStorage.getItem('key');
  `;
  code65: string = `sessionStorage.setItem('key', 'value');
  let value = sessionStorage.getItem('key');
  `;
  code66: string = `// Open a database
  let request = indexedDB.open('databaseName', version);
  
  // Create an object store
  let objectStore = db.createObjectStore('storeName', { keyPath: 'id' });
  
  // Add data to the object store
  objectStore.add({ id: 1, data: 'value' });
  
  // Retrieve data from the object store
  let transaction = db.transaction(['storeName'], 'readonly');
  let objectStore = transaction.objectStore('storeName');
  let request = objectStore.get(1);
  `;
  code67: string = `document.cookie = 'name=value; expires=Sun, 31 Dec 2023 23:59:59 GMT; path=/';
  let cookieValue = document.cookie;
  `;
  code68: string = `sessionStorage.setItem('key', 'value');
  let value = sessionStorage.getItem('key');
  `;
  code69: string = `// Cache a response
  caches.open('cacheName').then(cache => {
      cache.put(request, response);
  });
  
  // Retrieve a response from the cache
  caches.match(request).then(response => {
      if (response) {
          // Use cached response
      }
  });
  `;
  code70: string = `// Open a cache
  caches.open('my-cache').then(cache => {
      // Cache a resource
      cache.add('/path/to/resource');
  
      // Retrieve a resource from the cache
      cache.match('/path/to/resource').then(response => {
          if (response) {
              // Use cached response
          }
      });
  });
  `;
  code71: string = `document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";`;
  code72: string = `document.cookie = "username=John; path=/services";`;
  code73: string = `document.cookie =
  "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";`;
  code74: string = `if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    // Sorry! No Web Storage support..
  }`;
  code75: string = `if (typeof Worker !== "undefined") {
    // code for Web worker support.
  } else {
    // Sorry! No Web Worker support..
  }`;
  code76: string = `let i = 0;

  function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
  }
  
  timedCount();`;
  code77: string = `if (typeof w == "undefined") {
    w = new Worker("counter.js");
  }`;
  code78: string = `w.onmessage = function (event) {
    document.getElementById("message").innerHTML = event.data;
  };`;
  code79: string = `w.terminate();`;
  code80: string = `w = undefined;`;
  code81: string = `function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
        const data = error ? null : "Data from API";
        callback(error, data);
    }, 2000);
}

// Usage of callback
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Data received (Callback):", data);
    }
});`;
  code82: string = `function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
            const data = error ? null : "Data from API";
            error ? reject(error) : resolve(data);
        }, 2000);
    });
}

// Usage of Promise
fetchDataWithPromise()
    .then((data) => {
        console.log("Data received (Promise):", data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
`;
  code83: string = `async function fetchDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        console.log("Data received (Async/Await):", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Usage of Async/Await
fetchDataWithAsyncAwait();

`;
  code84: string = `const EventEmitter = require('events');

  class DataEmitter extends EventEmitter {}
  
  const dataEmitter = new DataEmitter();
  
  dataEmitter.on('data', (data) => {
      console.log("Data received (Event Emitters):", data);
  });
  
  function fetchDataWithEventEmitter() {
      setTimeout(() => {
          const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
          const data = error ? null : "Data from API";
          error ? dataEmitter.emit('error', error) : dataEmitter.emit('data', data);
      }, 2000);
  }
  
  // Usage of Event Emitters
  fetchDataWithEventEmitter();
  `;
  code85: string = `function* fetchGenerator() {
    try {
        const data = yield fetchDataWithPromise();
        console.log("Data received (Generators):", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

const generator = fetchGenerator();
generator.next().value
    .then((data) => {
        generator.next(data);
    })
    .catch((error) => {
        generator.throw(error);
    });`;
  code86: string = `import { Observable } from 'rxjs';

  const observable = new Observable(observer => {
      setTimeout(() => {
          observer.next('Data from Observable');
          observer.complete();
      }, 2000);
  });
  
  observable.subscribe({
      next: data => console.log('Data received (Observable):', data),
      error: error => console.error('Error:', error),
      complete: () => console.log('Observable completed')
  });
  `;
  code87: string = `import { of } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  
  of('Data from Observable')
      .pipe(
          map(data => data.toUpperCase()),
          catchError(error => {
              console.error('Error:', error);
              return of('Error occurred');
          })
      )
      .subscribe(data => console.log('Transformed Data:', data));
  `;
  code88: string = `import { Subject } from 'rxjs';

  const subject = new Subject();
  
  subject.subscribe({
      next: data => console.log('Observer 1:', data)
  });
  
  subject.next('Data from Subject');
  
  subject.subscribe({
      next: data => console.log('Observer 2:', data)
  });
  
  subject.next('More data from Subject');
  `;
  code89: string = `import { asyncScheduler } from 'rxjs';

  asyncScheduler.schedule(() => {
      console.log('Scheduled task');
  });
  `;
  code90: string = `import { throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  throwError(new Error('Error occurred'))
      .pipe(
          catchError(error => {
              console.error('Error:', error.message);
              return throwError('Handled error');
          })
      )
      .subscribe(data => console.log(data));
  `;
  code91: string = `async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});`;
  code92: string = `if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  }`;
  code93: string = `if (typeof EventSource !== "undefined") {
    // Server-sent events supported. Let's have some code here!
  } else {
    // No server-sent events supported
  }`;
  code94: string = `loadScript("/script1.js", function (script) {
    console.log("first script is loaded");
  
    loadScript("/script2.js", function (script) {
      console.log("second script is loaded");
  
      loadScript("/script3.js", function (script) {
        console.log("third script is loaded");
        // after all scripts are loaded
      });
    });
  });`;
  code95: string = `new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
    .then(function (result) {
      console.log(result); // 1
      return result * 2;
    })
    .then(function (result) {
      console.log(result); // 2
      return result * 3;
    })
    .then(function (result) {
      console.log(result); // 6
      return result * 4;
    });`;
  code96: string = `Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log('Error in promises \${error}'))`;
  code97: string = `var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
  });
  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
  });
  
  Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
  });`;
  code98: string = `"use strict";
  x = 3.14; // This will cause an error because x is not declared`;
  code99: string = `x = 3.14; // This will not cause an error.
  myFunction();
  
  function myFunction() {
    "use strict";
    y = 3.14; // This will cause an error
  }`;
  code100: string = ``;
  code101: string = ``;
  code102: string = ``;
  code103: string = ``;
  code104: string = ``;
  code105: string = ``;
  code106: string = ``;
  code107: string = ``;
  code108: string = ``;
  code109: string = ``;
  code110: string = ``;




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
