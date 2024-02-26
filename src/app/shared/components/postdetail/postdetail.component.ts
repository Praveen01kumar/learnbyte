import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { PostCard } from '../../interfaces/interfaces';
import { PostListComponent } from '../post-list/post-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api-service';

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
    PostListComponent,
  ]
})
export class PostdetailComponent implements OnInit {

  postCards!: PostCard[];
  category: any[] = ["Design", "Programming", "Leadership", "Marketing", "Lengauge"];
  postData: any;
  postList!: PostCard[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.onInitCall();
  }

  Goto(url: string) {
    this.router.navigate([url]);
  }

  onInitCall() {
    this.apiService.getAis().subscribe((res: any) => {
      if (res) {
        this.postCards = res?.popularPost;
        this.postList = res?.postList;
        this.route.params.subscribe(params => { this.postData = this.postList.find((post: any) => post?.id === params['id']); });
      }
    });
  }



}
