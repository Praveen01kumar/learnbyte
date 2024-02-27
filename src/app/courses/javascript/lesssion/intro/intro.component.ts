import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, OnDestroy {

  symbal: string = '${}';

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [
      { name: "Understanding JavaScript", id: "understanding_javaScript" },
      { name: "Key Features of JavaScript", id: "key_features_of_javaScript" },
      { name: "Advanced Techniques", id: "advanced_techniques" },
      { name: "JavaScript Ecosystem", id: "javaScript_ecosystem" },
      { name: "Getting Started with JavaScript", id: "getting_started_with_javaScript" },
      { name: "Conclusion", id: "js_intro_conclusion" },

    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }

}
