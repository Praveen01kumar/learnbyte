import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseListComponent } from 'src/app/shared/components/course-list/course-list.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeLayoutComponent } from 'src/app/shared/components/home-layout/home-layout.component';
import { courceRoute } from 'src/app/shared/const/const';
import { CouseCard, HLayOut } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    CourseListComponent,
    HomeLayoutComponent
  ]
})
export class CoursesComponent implements OnInit {

  courceCards: CouseCard[] = [
    { name: 'JavaScript', url: courceRoute.javascript, icon: 'assets/cource/javascript.png', item_bg: '#f7df1e' },
    { name: 'Angular', url: courceRoute.angular, icon: 'assets/cource/angular.png', item_bg: '#e23237' },
    { name: 'TypeScript', url: courceRoute.typescript, icon: 'assets/cource/typescript.png', item_bg: '#3178c6' },
    { name: 'NodeJs', url: courceRoute.nodejs, icon: 'assets/cource/nodejs.png', item_bg: '#539e43' },
    { name: 'ExpressJs', url: courceRoute.expressjs, icon: 'assets/cource/expressjs.png', item_bg: '#a8b9cc' },
    { name: 'Sequelize', url: courceRoute.sequelize, icon: 'assets/cource/sequelize.png', item_bg: '#03afef' },
    { name: 'NestJs', url: courceRoute.nestjs, icon: 'assets/cource/nestjs.png', item_bg: '#ea2845' },
  ];

  homeData: HLayOut = { head: "Top Cources", des: "Click on the Cources and explore!", search: true, course: this.courceCards, type: "course" };

  constructor() { }
  ngOnInit(): void {

  }

  searchedData(searchedData: CouseCard[]) { this.courceCards = searchedData; }


}
