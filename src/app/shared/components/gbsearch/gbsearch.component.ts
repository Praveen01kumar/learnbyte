import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'gbsearch',
  templateUrl: './gbsearch.component.html',
  styleUrls: ['./gbsearch.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
  ]
})
export class Gbsearch implements OnInit {
  searchFilter: any;
  placeholder: string = "search...";
  @Input() searchData: any;
  @Output() filteredData: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
    this.searchFilter = this.searchData;
  }

  gSearch(event: any) {
    this.searchData = this.searchFilter;
    this.searchData = this.searchData?.filter((i: any) => i?.name?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
    this.filteredData.emit(this.searchData);
  }

}
