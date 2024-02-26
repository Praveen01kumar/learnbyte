import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { HomeLayoutComponent } from 'src/app/shared/components/home-layout/home-layout.component';
import { PostListComponent } from 'src/app/shared/components/post-list/post-list.component';
import { HLayOut, PostCard } from 'src/app/shared/interfaces/interfaces';
import { ApiService } from 'src/app/shared/service/api-service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    PostListComponent,
    HomeLayoutComponent
  ]
})
export class PostsComponent implements OnInit {

  // constructor() { }
  // postCards!: PostCard[];
  postCards: PostCard[] = [
    { description:"", created:"", id:"post_id_1", img: 'assets/post/post-img-1.jpg', name: 'Supervised Machine Learning: Regression and Classification', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Wade Warren', des: 'Python Developer' }, catcol: '#24D198', post_cat: 'Design' },
    { description:"", created:"", id:"post_id_2", img: 'assets/post/post-img-2.jpg', name: 'Programming for Everybody (Getting Started with Python)', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Brooklyn Simmons', des: 'Programmer' }, catcol: '#00C1FF', post_cat: 'Programming' },
    { description:"", created:"", id:"post_id_3", img: 'assets/post/post-img-3.jpg', name: 'Leading Teams: Developing as a Leader', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Guy Hawkins', des: 'HR' }, catcol: '#F15568', post_cat: 'Leadership' },
    { description:"", created:"", id:"post_id_4", img: 'assets/post/post-img-4.jpg', name: 'Powerful mental tools to help you master tough subjects', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Jacob Jones', des: 'Self Developer' }, catcol: '#7F56D9', post_cat: 'Marketing' },
    { description:"", created:"", id:"post_id_5", img: 'assets/post/post-img-5.jpg', name: 'Python for Financial Analysis Next and Algorithmic Trading', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Dianne Russell', des: 'Financial Expert' }, catcol: '#FF6905', post_cat: 'Design' },
    { description:"", created:"", id:"post_id_6", img: 'assets/post/post-img-6.jpg', name: 'Improve Your English Skills Specialization', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Eleanor Pena', des: 'English Teacher' }, catcol: '#4883FF', post_cat: 'Lengauge' },
  ];
  // homeData: HLayOut = { head: "Top Posts", des: "Click on the Posts and explore!", search: true, post: this.postCards, type: "post" };
  // ngOnInit(): void {
  // }
  // searchedData(searchedData: PostCard[]) { this.postCards = searchedData; }

  homeData: HLayOut = { head: "Top Posts", des: "Click on the Posts and explore!", search: true, post: this.postCards, type: "post" };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.onInitCall();
  }

  searchedData(searchedData: PostCard[]) { this.postCards = searchedData; }

  onInitCall() {
    this.apiService.getAis().subscribe((res: any) => {
      if (res) {
        this.postCards = res?.postList;
        this.homeData = { ...this.homeData, post: this.postCards }
      }
    });
  }


}
