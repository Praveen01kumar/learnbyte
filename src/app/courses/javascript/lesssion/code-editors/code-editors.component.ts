import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-code-editors',
  templateUrl: './code-editors.component.html',
  styleUrls: ['./code-editors.component.scss']
})
export class CodeEditorsComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "Understanding Code Editors", id: "Understanding_Code_Editors" },
      { name: "Syntax Highlighting in Visual Studio Code", id: "Syntax_Highlighting_in_Visual_Studio_Code" },
      { name: "Conclusion", id: "code_editors_conclusion" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  code: string = `
  // JavaScript code snippet with syntax highlighting
  function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("World"));
  `;

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }

}
