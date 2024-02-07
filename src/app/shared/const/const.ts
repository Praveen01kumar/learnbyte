
export const routeConfig = {
    empty: '',
    ver: 'v1',
    login: 'login',
    register: 'register',
    veiled: '**'
}

export const courceRoute = {
    angular: 'angular',
    javascript: 'javascript',
    typescript: 'typescript',
}

export const ngTopics = {
    intro: 'intro',
}

export const jsTopics = {
    intro: 'intro',
}

export const tsTopics = {
    intro: 'intro',
}

export const AngularContent = {
    heading: "The comprehensive framework of JavaScript (Angular).",
    description: "Angular is a comprehensive front-end web application framework developed and maintained by Google. It enables developers to build dynamic, single-page applications (SPAs) using a component-based architecture. Angular offers features such as two-way data binding, dependency injection, routing, and form handling. It promotes code organization and reusability, making it suitable for projects of all sizes. With built-in tools for managing state, handling HTTP requests, and implementing reactive programming using RxJS, Angular provides a powerful toolkit for creating modern and maintainable web applications.",
    route: "angular",
    list: [{
        list_title: "An introduction",
        href: "intro",
        sub_list: [
            { sub_title: "An Introduction to JavaScript", href: "intro" },
            { sub_title: "Manuals and specifications", href: "intro" },
            { sub_title: "Code editors", href: "intro" },
            { sub_title: "Developer console", href: "intro" }
        ]
    },
    {
        list_title: "JavaScript Fundamentals",
        href: "intro",
        sub_list: [
            { sub_title: "Hello, world!", href: "intro" },
            { sub_title: "Code structure", href: "intro" },
            { sub_title: 'The modern mode, "use strict"', href: "intro" },
            { sub_title: "Variables", href: "intro" },
            { sub_title: "Data types", href: "intro" },
            { sub_title: "Interaction: alert, prompt, confirm", href: "intro" },
            { sub_title: "Type Conversions", href: "intro" },
            { sub_title: "Basic operators, maths", href: "intro" },
            { sub_title: "Comparisons", href: "intro" },
            { sub_title: "Conditional branching: if,'?'", href: "intro" },
            { sub_title: "Logical operators", href: "intro" },
            { sub_title: "Nullish coalescing operator '??'", href: "intro" },
            { sub_title: "Loops: while and for", href: "intro" },
            { sub_title: 'The "switch" statement', href: "intro" },
            { sub_title: "Functions", href: "intro" },
            { sub_title: "Function expressions", href: "intro" },
            { sub_title: "Arrow functions, the basics", href: "intro" },
            { sub_title: "JavaScript specials", href: "intro" },
        ]
    },
    {
        list_title: "Code quality",
        href: "intro",
        sub_list: [
            { sub_title: "Debugging in the browser", href: "intro" },
            { sub_title: "Comments", href: "intro" },
            { sub_title: 'Automated testing with Mocha', href: "intro" },
            { sub_title: "Coding Style", href: "intro" },
            { sub_title: "Ninja code", href: "intro" },
            { sub_title: "Polyfills and transpilers", href: "intro" }
        ]
    },
    {
        list_title: "Objects: the basics",
        href: "intro",
        sub_list: [
            { sub_title: "Objects", href: "intro" },
            { sub_title: 'Object methods, "this"', href: "intro" },
            { sub_title: 'Symbol type', href: "intro" },
            { sub_title: "Object references and copying", href: "intro" },
            { sub_title: "Garbage collection", href: "intro" },
            { sub_title: 'Constructor, operator "new"', href: "intro" },
            { sub_title: "Optional chaining '?.'", href: "intro" },
            { sub_title: "Object to primitive conversion", href: "intro" }
        ]
    },
    {
        list_title: "Data types",
        href: "intro",
        sub_list: [
            { sub_title: "Methods of primitives", href: "intro" },
            { sub_title: 'Numbers', href: "intro" },
            { sub_title: 'Strings', href: "intro" },
            { sub_title: "Arrays", href: "intro" },
            { sub_title: "Array methods", href: "intro" },
            { sub_title: 'Iterables', href: "intro" },
            { sub_title: "Map and Set", href: "intro" },
            { sub_title: "WeakMap and WeakSet", href: "intro" },
            { sub_title: "Object.keys, values, entries", href: "intro" },
            { sub_title: "Destructuring assignment", href: "intro" },
            { sub_title: "Date and time", href: "intro" },
            { sub_title: "JSON methods, toJSON", href: "intro" },
        ]
    },
    {
        list_title: "Advanced working with functions",
        href: "intro",
        sub_list: [
            { sub_title: "Recursion and stack", href: "intro" },
            { sub_title: 'Rest parameters and spread syntax', href: "intro" },
            { sub_title: 'Variable scope, closure', href: "intro" },
            { sub_title: 'The old "var"', href: "intro" },
            { sub_title: "Global object", href: "intro" },
            { sub_title: 'Function object, NFE', href: "intro" },
            { sub_title: "The 'new Function' syntax", href: "intro" },
            { sub_title: "Scheduling: setTimeout and setInterval", href: "intro" },
            { sub_title: "Decorators and forwarding, call/apply", href: "intro" },
            { sub_title: "Function binding", href: "intro" },
            { sub_title: "Arrow functions revisited", href: "intro" }
        ]
    },
    {
        list_title: "Object properties configuration",
        href: "intro",
        sub_list: [
            { sub_title: "Property flags and descriptors", href: "intro" },
            { sub_title: 'Property getters and setters', href: "intro" }
        ]
    },
    {
        list_title: "Prototypes, inheritance",
        href: "intro",
        sub_list: [
            { sub_title: "Prototypal inheritance", href: "intro" },
            { sub_title: 'F.prototype', href: "intro" },
            { sub_title: 'Native prototypes', href: "intro" },
            { sub_title: 'Prototype methods, objects without __proto__', href: "intro" },
        ]
    },
    {
        list_title: "Classes",
        href: "intro",
        sub_list: [
            { sub_title: "Class basic syntax", href: "intro" },
            { sub_title: 'Class inheritance', href: "intro" },
            { sub_title: 'Static properties and methods', href: "intro" },
            { sub_title: 'Private and protected properties and methods', href: "intro" },
            { sub_title: 'Extending built-in intro', href: "intro" },
            { sub_title: 'Class checking: "instanceof"', href: "intro" },
            { sub_title: 'Mixins"', href: "intro" },
        ]
    },
    {
        list_title: "Error handling",
        href: "intro",
        sub_list: [
            { sub_title: 'Error handling, "try...catch"', href: "intro" },
            { sub_title: "Custom errors, extending Error", href: "intro" }
        ]
    },
    {
        list_title: "Promises, async/await",
        href: "intro",
        sub_list: [
            { sub_title: "Introduction: callbacks", href: "intro" },
            { sub_title: "Promise", href: "intro" },
            { sub_title: "Promises chaining", href: "intro" },
            { sub_title: "Error handling with intro", href: "intro" },
            { sub_title: "Promise API", href: "intro" },
            { sub_title: "Promisification", href: "intro" },
            { sub_title: "Microtasks", href: "intro" },
            { sub_title: "Async/await", href: "intro" }
        ]
    },
    {
        list_title: "Generators, advanced iteration",
        href: "intro",
        sub_list: [
            { sub_title: "Generators", href: "intro" },
            { sub_title: "Async iteration and generators", href: "intro" }
        ]
    },
    {
        list_title: "Modules",
        href: "intro",
        sub_list: [
            { sub_title: "Modules, introduction", href: "intro" },
            { sub_title: "Export and Import", href: "intro" },
            { sub_title: "Dynamic imports", href: "intro" }
        ]
    },
    ]
}

export const JavaScriptContent = {
    heading: "The JavaScript language.",
    description: "avaScript is a high-level, dynamic, interpreted programming language primarily used for front-end web development. It allows developers to add interactivity and dynamic behavior to web pages. JavaScript is commonly used alongside HTML and CSS to create dynamic and interactive user interfaces for websites and web applications. JavaScript code can be embedded directly into HTML documents or referenced externally, and it can manipulate the content and structure of web pages, respond to user actions, and communicate with servers to fetch or send data asynchronously, allowing for the creation of responsive and interactive web applications. Originally created by Brendan Eich at Netscape Communications Corporation in 1995, JavaScript has evolved significantly over the years and is now supported by all major web browsers. It has also expanded beyond front-end development and is now used in server-side development (Node.js), mobile app development (React Native), desktop application development (Electron), and more.",
    route: "javascript",
    list: [{
        list_title: "An introduction",
        href: "intro",
        sub_list: [
            { sub_title: "An Introduction to JavaScript", href: "intro" },
            { sub_title: "Manuals and specifications", href: "intro" },
            { sub_title: "Code editors", href: "intro" },
            { sub_title: "Developer console", href: "intro" }
        ]
    },
    {
        list_title: "JavaScript Fundamentals",
        href: "intro",
        sub_list: [
            { sub_title: "Hello, world!", href: "intro" },
            { sub_title: "Code structure", href: "intro" },
            { sub_title: 'The modern mode, "use strict"', href: "intro" },
            { sub_title: "Variables", href: "intro" },
            { sub_title: "Data types", href: "intro" },
            { sub_title: "Interaction: alert, prompt, confirm", href: "intro" },
            { sub_title: "Type Conversions", href: "intro" },
            { sub_title: "Basic operators, maths", href: "intro" },
            { sub_title: "Comparisons", href: "intro" },
            { sub_title: "Conditional branching: if,'?'", href: "intro" },
            { sub_title: "Logical operators", href: "intro" },
            { sub_title: "Nullish coalescing operator '??'", href: "intro" },
            { sub_title: "Loops: while and for", href: "intro" },
            { sub_title: 'The "switch" statement', href: "intro" },
            { sub_title: "Functions", href: "intro" },
            { sub_title: "Function expressions", href: "intro" },
            { sub_title: "Arrow functions, the basics", href: "intro" },
            { sub_title: "JavaScript specials", href: "intro" },
        ]
    },
    {
        list_title: "Code quality",
        href: "intro",
        sub_list: [
            { sub_title: "Debugging in the browser", href: "intro" },
            { sub_title: "Comments", href: "intro" },
            { sub_title: 'Automated testing with Mocha', href: "intro" },
            { sub_title: "Coding Style", href: "intro" },
            { sub_title: "Ninja code", href: "intro" },
            { sub_title: "Polyfills and transpilers", href: "intro" }
        ]
    },
    {
        list_title: "Objects: the basics",
        href: "intro",
        sub_list: [
            { sub_title: "Objects", href: "intro" },
            { sub_title: 'Object methods, "this"', href: "intro" },
            { sub_title: 'Symbol type', href: "intro" },
            { sub_title: "Object references and copying", href: "intro" },
            { sub_title: "Garbage collection", href: "intro" },
            { sub_title: 'Constructor, operator "new"', href: "intro" },
            { sub_title: "Optional chaining '?.'", href: "intro" },
            { sub_title: "Object to primitive conversion", href: "intro" }
        ]
    },
    {
        list_title: "Data types",
        href: "intro",
        sub_list: [
            { sub_title: "Methods of primitives", href: "intro" },
            { sub_title: 'Numbers', href: "intro" },
            { sub_title: 'Strings', href: "intro" },
            { sub_title: "Arrays", href: "intro" },
            { sub_title: "Array methods", href: "intro" },
            { sub_title: 'Iterables', href: "intro" },
            { sub_title: "Map and Set", href: "intro" },
            { sub_title: "WeakMap and WeakSet", href: "intro" },
            { sub_title: "Object.keys, values, entries", href: "intro" },
            { sub_title: "Destructuring assignment", href: "intro" },
            { sub_title: "Date and time", href: "intro" },
            { sub_title: "JSON methods, toJSON", href: "intro" },
        ]
    },
    {
        list_title: "Advanced working with functions",
        href: "intro",
        sub_list: [
            { sub_title: "Recursion and stack", href: "intro" },
            { sub_title: 'Rest parameters and spread syntax', href: "intro" },
            { sub_title: 'Variable scope, closure', href: "intro" },
            { sub_title: 'The old "var"', href: "intro" },
            { sub_title: "Global object", href: "intro" },
            { sub_title: 'Function object, NFE', href: "intro" },
            { sub_title: "The 'new Function' syntax", href: "intro" },
            { sub_title: "Scheduling: setTimeout and setInterval", href: "intro" },
            { sub_title: "Decorators and forwarding, call/apply", href: "intro" },
            { sub_title: "Function binding", href: "intro" },
            { sub_title: "Arrow functions revisited", href: "intro" }
        ]
    },
    {
        list_title: "Object properties configuration",
        href: "intro",
        sub_list: [
            { sub_title: "Property flags and descriptors", href: "intro" },
            { sub_title: 'Property getters and setters', href: "intro" }
        ]
    },
    {
        list_title: "Prototypes, inheritance",
        href: "intro",
        sub_list: [
            { sub_title: "Prototypal inheritance", href: "intro" },
            { sub_title: 'F.prototype', href: "intro" },
            { sub_title: 'Native prototypes', href: "intro" },
            { sub_title: 'Prototype methods, objects without __proto__', href: "intro" },
        ]
    },
    {
        list_title: "Classes",
        href: "intro",
        sub_list: [
            { sub_title: "Class basic syntax", href: "intro" },
            { sub_title: 'Class inheritance', href: "intro" },
            { sub_title: 'Static properties and methods', href: "intro" },
            { sub_title: 'Private and protected properties and methods', href: "intro" },
            { sub_title: 'Extending built-in intro', href: "intro" },
            { sub_title: 'Class checking: "instanceof"', href: "intro" },
            { sub_title: 'Mixins"', href: "intro" },
        ]
    },
    {
        list_title: "Error handling",
        href: "intro",
        sub_list: [
            { sub_title: 'Error handling, "try...catch"', href: "intro" },
            { sub_title: "Custom errors, extending Error", href: "intro" }
        ]
    },
    {
        list_title: "Promises, async/await",
        href: "intro",
        sub_list: [
            { sub_title: "Introduction: callbacks", href: "intro" },
            { sub_title: "Promise", href: "intro" },
            { sub_title: "Promises chaining", href: "intro" },
            { sub_title: "Error handling with intro", href: "intro" },
            { sub_title: "Promise API", href: "intro" },
            { sub_title: "Promisification", href: "intro" },
            { sub_title: "Microtasks", href: "intro" },
            { sub_title: "Async/await", href: "intro" }
        ]
    },
    {
        list_title: "Generators, advanced iteration",
        href: "intro",
        sub_list: [
            { sub_title: "Generators", href: "intro" },
            { sub_title: "Async iteration and generators", href: "intro" }
        ]
    },
    {
        list_title: "Modules",
        href: "intro",
        sub_list: [
            { sub_title: "Modules, introduction", href: "intro" },
            { sub_title: "Export and Import", href: "intro" },
            { sub_title: "Dynamic imports", href: "intro" }
        ]
    },
    ]
}

export const TypescriptContent = {
    heading: "The superset of JavaScript (Typescript).",
    description: "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. Developed and maintained by Microsoft, TypeScript aims to enhance the development experience by providing developers with tools for building large-scale applications more effectively.",
    route: "typescript",
    list: [{
        list_title: "An introduction",
        href: "intro",
        sub_list: [
            { sub_title: "An Introduction to JavaScript", href: "intro" },
            { sub_title: "Manuals and specifications", href: "intro" },
            { sub_title: "Code editors", href: "intro" },
            { sub_title: "Developer console", href: "intro" }
        ]
    },
    {
        list_title: "JavaScript Fundamentals",
        href: "intro",
        sub_list: [
            { sub_title: "Hello, world!", href: "intro" },
            { sub_title: "Code structure", href: "intro" },
            { sub_title: 'The modern mode, "use strict"', href: "intro" },
            { sub_title: "Variables", href: "intro" },
            { sub_title: "Data types", href: "intro" },
            { sub_title: "Interaction: alert, prompt, confirm", href: "intro" },
            { sub_title: "Type Conversions", href: "intro" },
            { sub_title: "Basic operators, maths", href: "intro" },
            { sub_title: "Comparisons", href: "intro" },
            { sub_title: "Conditional branching: if,'?'", href: "intro" },
            { sub_title: "Logical operators", href: "intro" },
            { sub_title: "Nullish coalescing operator '??'", href: "intro" },
            { sub_title: "Loops: while and for", href: "intro" },
            { sub_title: 'The "switch" statement', href: "intro" },
            { sub_title: "Functions", href: "intro" },
            { sub_title: "Function expressions", href: "intro" },
            { sub_title: "Arrow functions, the basics", href: "intro" },
            { sub_title: "JavaScript specials", href: "intro" },
        ]
    },
    {
        list_title: "Code quality",
        href: "intro",
        sub_list: [
            { sub_title: "Debugging in the browser", href: "intro" },
            { sub_title: "Comments", href: "intro" },
            { sub_title: 'Automated testing with Mocha', href: "intro" },
            { sub_title: "Coding Style", href: "intro" },
            { sub_title: "Ninja code", href: "intro" },
            { sub_title: "Polyfills and transpilers", href: "intro" }
        ]
    },
    {
        list_title: "Objects: the basics",
        href: "intro",
        sub_list: [
            { sub_title: "Objects", href: "intro" },
            { sub_title: 'Object methods, "this"', href: "intro" },
            { sub_title: 'Symbol type', href: "intro" },
            { sub_title: "Object references and copying", href: "intro" },
            { sub_title: "Garbage collection", href: "intro" },
            { sub_title: 'Constructor, operator "new"', href: "intro" },
            { sub_title: "Optional chaining '?.'", href: "intro" },
            { sub_title: "Object to primitive conversion", href: "intro" }
        ]
    },
    {
        list_title: "Data types",
        href: "intro",
        sub_list: [
            { sub_title: "Methods of primitives", href: "intro" },
            { sub_title: 'Numbers', href: "intro" },
            { sub_title: 'Strings', href: "intro" },
            { sub_title: "Arrays", href: "intro" },
            { sub_title: "Array methods", href: "intro" },
            { sub_title: 'Iterables', href: "intro" },
            { sub_title: "Map and Set", href: "intro" },
            { sub_title: "WeakMap and WeakSet", href: "intro" },
            { sub_title: "Object.keys, values, entries", href: "intro" },
            { sub_title: "Destructuring assignment", href: "intro" },
            { sub_title: "Date and time", href: "intro" },
            { sub_title: "JSON methods, toJSON", href: "intro" },
        ]
    },
    {
        list_title: "Advanced working with functions",
        href: "intro",
        sub_list: [
            { sub_title: "Recursion and stack", href: "intro" },
            { sub_title: 'Rest parameters and spread syntax', href: "intro" },
            { sub_title: 'Variable scope, closure', href: "intro" },
            { sub_title: 'The old "var"', href: "intro" },
            { sub_title: "Global object", href: "intro" },
            { sub_title: 'Function object, NFE', href: "intro" },
            { sub_title: "The 'new Function' syntax", href: "intro" },
            { sub_title: "Scheduling: setTimeout and setInterval", href: "intro" },
            { sub_title: "Decorators and forwarding, call/apply", href: "intro" },
            { sub_title: "Function binding", href: "intro" },
            { sub_title: "Arrow functions revisited", href: "intro" }
        ]
    },
    {
        list_title: "Object properties configuration",
        href: "intro",
        sub_list: [
            { sub_title: "Property flags and descriptors", href: "intro" },
            { sub_title: 'Property getters and setters', href: "intro" }
        ]
    },
    {
        list_title: "Prototypes, inheritance",
        href: "intro",
        sub_list: [
            { sub_title: "Prototypal inheritance", href: "intro" },
            { sub_title: 'F.prototype', href: "intro" },
            { sub_title: 'Native prototypes', href: "intro" },
            { sub_title: 'Prototype methods, objects without __proto__', href: "intro" },
        ]
    },
    {
        list_title: "Classes",
        href: "intro",
        sub_list: [
            { sub_title: "Class basic syntax", href: "intro" },
            { sub_title: 'Class inheritance', href: "intro" },
            { sub_title: 'Static properties and methods', href: "intro" },
            { sub_title: 'Private and protected properties and methods', href: "intro" },
            { sub_title: 'Extending built-in intro', href: "intro" },
            { sub_title: 'Class checking: "instanceof"', href: "intro" },
            { sub_title: 'Mixins"', href: "intro" },
        ]
    },
    {
        list_title: "Error handling",
        href: "intro",
        sub_list: [
            { sub_title: 'Error handling, "try...catch"', href: "intro" },
            { sub_title: "Custom errors, extending Error", href: "intro" }
        ]
    },
    {
        list_title: "Promises, async/await",
        href: "intro",
        sub_list: [
            { sub_title: "Introduction: callbacks", href: "intro" },
            { sub_title: "Promise", href: "intro" },
            { sub_title: "Promises chaining", href: "intro" },
            { sub_title: "Error handling with intro", href: "intro" },
            { sub_title: "Promise API", href: "intro" },
            { sub_title: "Promisification", href: "intro" },
            { sub_title: "Microtasks", href: "intro" },
            { sub_title: "Async/await", href: "intro" }
        ]
    },
    {
        list_title: "Generators, advanced iteration",
        href: "intro",
        sub_list: [
            { sub_title: "Generators", href: "intro" },
            { sub_title: "Async iteration and generators", href: "intro" }
        ]
    },
    {
        list_title: "Modules",
        href: "intro",
        sub_list: [
            { sub_title: "Modules, introduction", href: "intro" },
            { sub_title: "Export and Import", href: "intro" },
            { sub_title: "Dynamic imports", href: "intro" }
        ]
    },
    ]
}
