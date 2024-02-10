import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule
  ]
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {


  }

  gotoRoute(url:string){
    this.router.navigate([url]);
  }


}


// import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
// import { SharedService } from '../../services/shared.service';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-featured-courses',
//   templateUrl: './featured-courses.component.html',
//   styleUrls: ['./featured-courses.component.scss'],
// })
// export class FeaturedCoursesComponent implements OnInit {

//   @Input() featuredCourses: any;
//   @ViewChild(CarouselComponent, null) carousel: CarouselComponent;
//   intervalId: any;

//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: false,
//     dots: true,
//     margin: 24,
//     navSpeed: 700,
//     navText: [' < ', ' > '],
//     responsive: {
//       0: {
//         items: 1,
//         margin: 10,
//       },

//       400: {
//         items: 2,
//       },

//       600: {
//         items: 3,
//       },

//       991: {
//         items: 3,
//       },

//       1199: {
//         items: 4,
//       }
//     }
//   }

//   constructor(
//     private sharedSvc: SharedService,
//     private router: Router
//   ) { }

//   ngOnInit() {
//   }

//   navigateToSeeAll() {
//     this.router.navigate(['contentList'])
//   }

//   getCourseUrl(identifier): string {
//     return this.sharedSvc.baseUrl + 'public/toc/' + identifier + '/overview'
//   }

//   slideNext() {
//     this.carousel.next();
//   }

//   slidePrevious() {
//     this.carousel.prev();
//   }

//   getLinks(url: string) {
//     return this.sharedSvc.baseUrl + url
//   }
// }
