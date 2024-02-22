import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { Gbsearch } from '../gbsearch/gbsearch.component';
import { MatIconModule } from '@angular/material/icon';
import { Content } from '../../interfaces/interfaces';

@Component({
  selector: 'app-contentbox',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    Gbsearch,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.scss']
})
export class ContentboxComponent implements OnInit {
  searchFilter: any;
  @Input() contentData!: Content;
  @Input() contentFilterData: any;
  constructor() { }

  ngOnInit(): void { this.searchFilter = this.contentFilterData; }

  Search(event: any) {
    this.contentFilterData = this.searchFilter;
    this.contentFilterData = this.contentFilterData?.filter((i: any) => i?.list_title?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }


}
