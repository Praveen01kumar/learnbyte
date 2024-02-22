import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CourseListComponent implements OnInit {
  @Input() courceList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  gotoCouese(url: string) {
    this.router.navigate([url]);
  }

}
