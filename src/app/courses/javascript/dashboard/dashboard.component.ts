import { Component } from '@angular/core';
import { JavaScriptContent } from 'src/app/shared/const/const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  contentData:any = JavaScriptContent;
}
