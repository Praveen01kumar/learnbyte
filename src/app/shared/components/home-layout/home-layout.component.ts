import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gbsearch } from '../gbsearch/gbsearch.component';
import { HLayOut } from '../../interfaces/interfaces';

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    Gbsearch,
  ]
})
export class HomeLayoutComponent implements OnInit {
  @Input() homeData!: HLayOut;
  @Output() searchedData: EventEmitter<any[]> = new EventEmitter<any[]>();
  constructor() { }
  searchBy: any;
  ngOnInit(): void {
    if (this.homeData && this.homeData?.type == "course") {
      this.searchBy = this.homeData?.course;
    }
    if (this.homeData && this.homeData?.type == "post") {
      this.searchBy = this.homeData?.post;
    }
  }

  filteredData(filteredData: any[]) {
    this.searchedData.emit(filteredData);
  }

}
