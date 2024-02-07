import { Component, OnInit } from '@angular/core';
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
export class Gbsearch implements OnInit{

  placeholder:string = "search...";
  
  constructor(){}

  ngOnInit(): void {
      
  }

}
