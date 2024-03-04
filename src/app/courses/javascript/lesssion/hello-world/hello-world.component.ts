import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "Hello, World!", id: "Hello_World" },
      { name: "Historical Significance", id: "Historical_Significance" },
      { name: 'Delving into "Hello, World!"', id: "Delving_into_Hello_World" },
      { name: "Code Structure", id: "Code_Structure" },
      { name: "Explanation of Key Concepts", id: "Explanation_of_Key_Concepts" },
      { name: "Conclusion", id: "hello_world_Conclusion" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
  // JavaScript "Hello, World!" Example
  console.log("Hello, World!");
`;

code1: string = `
<script>
// JavaScript code goes here
</script>
`;

code2: string = `
<script src="path/to/script.js"></script>
`;

code3: string = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External Script Example</title>
    <!-- External JavaScript file referenced -->
    <script src="script.js"></script>
</head>
<body>
    <h1>Hello, World!</h1>
    <!-- Inline JavaScript code -->
    <script>
        console.log("This is inline JavaScript code.");
    </script>
</body>
</html>
`;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
}
