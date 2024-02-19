import { Component, OnInit } from '@angular/core';
import { Gbsearch } from '../shared/components/gbsearch/gbsearch.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { courceRoute } from '../shared/const/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    Gbsearch,
    CommonModule,
    RouterModule,
  ]
})
export class HomeComponent implements OnInit {
  courceCards: any[] = [
    { name: 'JavaScript', url: courceRoute.javascript, icon: 'assets/cource/javascript.png', item_bg: '#f7df1e' },
    { name: 'Angular', url: courceRoute.angular, icon: 'assets/cource/angular.png', item_bg: '#e23237' },
    { name: 'TypeScript', url: courceRoute.typescript, icon: 'assets/cource/typescript.png', item_bg: '#3178c6' },
    { name: 'NodeJs', url: courceRoute.nodejs, icon: 'assets/cource/nodejs.png', item_bg: '#539e43' },
    { name: 'ExpressJs', url: courceRoute.expressjs, icon: 'assets/cource/expressjs.png', item_bg: '#a8b9cc' },
    { name: 'Sequelize', url: courceRoute.sequelize, icon: 'assets/cource/sequelize.png', item_bg: '#03afef' },
    { name: 'NestJs', url: courceRoute.nestjs, icon: 'assets/cource/nestjs.png', item_bg: '#ea2845' },
  ];

  postCards: any[] = [
    { img: 'assets/post/post-img-1.jpg', title: 'Supervised Machine Learning: Regression and Classification', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Wade Warren', des: 'Python Developer' }, catcol: '#24D198', post_cat: 'Design' },
    { img: 'assets/post/post-img-2.jpg', title: 'Programming for Everybody (Getting Started with Python)', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Brooklyn Simmons', des: 'Programmer' }, catcol: '#00C1FF', post_cat: 'Programming' },
    { img: 'assets/post/post-img-3.jpg', title: 'Leading Teams: Developing as a Leader', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Guy Hawkins', des: 'HR' }, catcol: '#F15568', post_cat: 'Leadership' },
    { img: 'assets/post/post-img-4.jpg', title: 'Powerful mental tools to help you master tough subjects', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Jacob Jones', des: 'Self Developer' }, catcol: '#7F56D9', post_cat: 'Marketing' },
    { img: 'assets/post/post-img-5.jpg', title: 'Python for Financial Analysis Next and Algorithmic Trading', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Dianne Russell', des: 'Financial Expert' }, catcol: '#FF6905', post_cat: 'Design' },
    { img: 'assets/post/post-img-6.jpg', title: 'Improve Your English Skills Specialization', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Eleanor Pena', des: 'English Teacher' }, catcol: '#4883FF', post_cat: 'Lengauge' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  gotoCouese(url: string) {
    this.router.navigate([url]);
  }

}
