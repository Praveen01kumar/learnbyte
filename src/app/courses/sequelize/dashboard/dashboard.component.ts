import { Component } from '@angular/core';
import { SequelizeContent } from 'src/app/shared/const/const';
import { Content } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SequelizeDashboardComponent {
  contentData:Content = SequelizeContent;
  
}
