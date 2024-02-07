import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Gbsearch } from '../gbsearch/gbsearch.component';
import { routeConfig } from '../../const/const';

@Component({
  selector: 'app-contentbox',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    Gbsearch,
    RouterModule
  ],
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.scss']
})
export class ContentboxComponent implements OnInit {
  @Input() contentData: any;
  route_v: string = routeConfig?.ver;
  constructor() { }
  ngOnInit(): void { }


}
