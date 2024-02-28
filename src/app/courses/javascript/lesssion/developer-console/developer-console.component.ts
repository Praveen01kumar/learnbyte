import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-developer-console',
  templateUrl: './developer-console.component.html',
  styleUrls: ['./developer-console.component.scss']
})
export class DeveloperConsoleComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "Overview of Developer Console", id: "Overview_of_Developer_Console" },
      { name: "Inspecting and Modifying Elements", id: "Inspecting_and_Modifying_Elements" },
      { name: "Debugging JavaScript", id: "Debugging_JavaScript" },
      { name: "Conclusion", id: "Developer_Console_Conclusion" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
// Select an element by its ID
var element = document.getElementById('example-element');

// Modify its text content
element.textContent = 'New Content';

// Change its background color
element.style.backgroundColor = 'lightblue';
`;
  code1: string = `
function calculateSum(a, b) {
    var sum = a + b;
    debugger; // Set a breakpoint
    return sum;
}

var result = calculateSum(5, 3);
console.log(result);
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}
