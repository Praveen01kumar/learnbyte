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
import { ApiService } from 'src/app/shared/service/api-service';

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
  postCards!: PostCard[];
  homeData: HLayOut = { head: "Top Cources/Posts", des: "Click on the Cources/Posts and explore!", search: false, type: "home" };
  constructor(private router: Router, private apiService: ApiService) { }
  ngOnInit(): void { this.onInitCall(); }
  goTo(url: string) {
    this.router.navigate([url]);
  }
  onInitCall() {
    this.apiService.getAis().subscribe((res: any) => {
      if (res) { this.postCards = res?.homePosts; }
    });
  }

}
