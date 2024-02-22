import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PostCard } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class PostListComponent implements OnInit {
  @Input() postList: PostCard[] = [];
  constructor(private router: Router) { }
  ngOnInit(): void { }

  gotTo(url: string) {

    this.router.navigate([`posts/${url}`]);

  }

}
