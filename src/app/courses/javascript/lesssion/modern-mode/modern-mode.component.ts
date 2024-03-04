import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-modern-mode',
  templateUrl: './modern-mode.component.html',
  styleUrls: ['./modern-mode.component.scss']
})
export class ModernModeComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: '"use strict" directive in JavaScript', id: "use_strict_directive_in_JavaScript" },
      { name: 'Significance of "use strict"', id: "Significance_of_use_strict" },
      { name: 'Enabling Strict Mode', id: "Enabling_Strict_Mode" },
      { name: "Key Features and Benefits of Strict Mode", id: "Key_Features_and_Benefits_of_Strict_Mode" },
      { name: "Practical Examples of Strict Mode", id: "Practical_Examples_of_Strict_Mode" },
      { name: 'Unraveling "use strict"', id: "Unraveling_use_strict" },
      { name: 'Benefits of "use strict"', id: "Benefits_of_use_strict" },
      { name: 'Application of "use strict"', id: "Application_of_use_strict" },
      { name: 'Should we "use strict"?', id: "Should_we_use_strict_" },
      { name: 'Considerations for "use strict"', id: "Considerations_for_use_strict" },
      { name: "Conclusion", id: "Conclusion_use_strict" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `// Enabling strict mode in a script
  "use strict";
  
  // JavaScript code follows here
  `;

code1: string = `
// Enabling strict mode within a function
function myFunction() {
    "use strict";

    // Strict mode is enabled within this function
}
`;

code2: string = `
// Without strict mode (implicit globals)
function printMessage() {
    message = "Hello, World!"; // Implicit global variable
    console.log(message);
}

printMessage(); // Output: Hello, World!
console.log(message); // Output: Hello, World!

// With strict mode
"use strict";

function printMessage() {
    message = "Hello, World!"; // Throws a ReferenceError in strict mode
    console.log(message);
}

printMessage(); // Throws a ReferenceError: message is not defined
console.log(message); // ReferenceError: message is not defined
`;

code3: string = `
// Without strict mode
function assignToImmutable() {
    undefined = 42; // Silently fails in non-strict mode
}

assignToImmutable();

// With strict mode
"use strict";

function assignToImmutable() {
    undefined = 42; // Throws a TypeError in strict mode
}

assignToImmutable(); // Throws a TypeError: Cannot assign to read only property 'undefined' of object '#<Object>'
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}