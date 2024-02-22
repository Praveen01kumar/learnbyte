import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { courceRoute } from 'src/app/shared/const/const';
import { CourseListComponent } from 'src/app/shared/components/course-list/course-list.component';
import { PostListComponent } from 'src/app/shared/components/post-list/post-list.component';
import { HomeLayoutComponent } from 'src/app/shared/components/home-layout/home-layout.component';
import { CouseCard, HLayOut, PostCard } from 'src/app/shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    CourseListComponent,
    PostListComponent,
    HomeLayoutComponent
  ]
})
export class HomeComponent implements OnInit {

  courseCards: CouseCard[] = [
    { name: 'JavaScript', url: courceRoute.javascript, icon: 'assets/cource/javascript.png', item_bg: '#f7df1e' },
    { name: 'Angular', url: courceRoute.angular, icon: 'assets/cource/angular.png', item_bg: '#e23237' },
    { name: 'TypeScript', url: courceRoute.typescript, icon: 'assets/cource/typescript.png', item_bg: '#3178c6' },
  ];

  postCards: PostCard[] = [
    { img: 'assets/post/post-img-1.jpg', name: 'Supervised Machine Learning: Regression and Classification', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Wade Warren', des: 'Python Developer' }, catcol: '#24D198', post_cat: 'Design' },
    { img: 'assets/post/post-img-2.jpg', name: 'Programming for Everybody (Getting Started with Python)', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Brooklyn Simmons', des: 'Programmer' }, catcol: '#00C1FF', post_cat: 'Programming' },
    { img: 'assets/post/post-img-3.jpg', name: 'Leading Teams: Developing as a Leader', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Guy Hawkins', des: 'HR' }, catcol: '#F15568', post_cat: 'Leadership' },
    { img: 'assets/post/post-img-4.jpg', name: 'Powerful mental tools to help you master tough subjects', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Jacob Jones', des: 'Self Developer' }, catcol: '#7F56D9', post_cat: 'Marketing' },
  ];

  homeData: HLayOut = { head: "Top Cources/Posts", des: "Click on the Cources/Posts and explore!", search: false, type:"home"};

  constructor(private router:Router) { }

  ngOnInit(): void { }

  goTo(url:string){
    this.router.navigate([url]);
  }

  

}
