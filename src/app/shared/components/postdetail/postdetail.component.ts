import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { PostCard } from '../../interfaces/interfaces';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    PostListComponent
  ]
})
export class PostdetailComponent implements OnInit {
  postCards: PostCard[] = [
    { img: 'assets/post/post-img-1.jpg', name: 'Supervised Machine Learning: Regression and Classification', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Wade Warren', des: 'Python Developer' }, catcol: '#24D198', post_cat: 'Design' },
    { img: 'assets/post/post-img-5.jpg', name: 'Python for Financial Analysis Next and Algorithmic Trading', view_count: 124, like_count: 34, other: { img: 'assets/auth/avatar.webp', name: 'Dianne Russell', des: 'Financial Expert' }, catcol: '#FF6905', post_cat: 'Design' },
  ];
  category: any[] = ["Design", "Programming", "Leadership", "Marketing", "Lengauge"];
  constructor() { }
  ngOnInit(): void {

  }

}
