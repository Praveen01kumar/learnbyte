import { ChangeDetectorRef, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LsidebarComponent } from '../lsidebar/lsidebar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularContent, ExpressJsContent, JavaScriptContent, NestJsContent, NodeJsContent, SequelizeContent, TypescriptContent, courceRoute } from '../../const/const';
import { HLayOut, RsideBar } from '../../interfaces/interfaces';
import { MatIconModule } from '@angular/material/icon';
import { RsidebarComponent } from '../rsidebar/rsidebar.component';
import { SharedService } from '../../service/shared-service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LsidebarComponent,
    RouterModule,
    MatIconModule,
    RsidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  LsidebarTog: boolean = false;
  RsidebarTog: boolean = false;
  screenWidth: number;
  @Input() layoutData!: HLayOut;
  lsidebarData: any;
  rsidebarData: RsideBar[] = [];
  sub: Subscription[] = [];
  showScroll: boolean = false;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor(
    private route: ActivatedRoute,
    public shearedService: SharedService,
    private cdr: ChangeDetectorRef
  ) { this.screenWidth = window?.innerWidth; }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window?.innerWidth;
    if (this.screenWidth > 750) {
      this.LsidebarTog = true;
      this.RsidebarTog = true;
    } else {
      this.LsidebarTog = false;
      this.RsidebarTog = false;
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const condition = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
    if (condition > this.showScrollHeight) { this.showScroll = true; }
    else if (this.showScroll && condition < this.hideScrollHeight) { this.showScroll = false; }
  }

  ngOnInit() {
    const sideBardata = this.shearedService.rSidebar_Id_Data$.subscribe((res: any) => {
      if (res?.length) {
        this.rsidebarData = res;
      } else {
        this.rsidebarData = [];
      }
      this.cdr.detectChanges();
    });
    this.sub.push(sideBardata);

    const data = this.route.data.subscribe((v: any) => {
      if (v) {
        if (v?.courceData === courceRoute?.angular) {
          this.lsidebarData = AngularContent;
        }
        if (v?.courceData === courceRoute?.javascript) {
          this.lsidebarData = JavaScriptContent;
        }
        if (v?.courceData === courceRoute?.typescript) {
          this.lsidebarData = TypescriptContent;
        }
        if (v?.courceData === courceRoute?.nodejs) {
          this.lsidebarData = NodeJsContent;
        }
        if (v?.courceData === courceRoute?.expressjs) {
          this.lsidebarData = ExpressJsContent;
        }
        if (v?.courceData === courceRoute?.nestjs) {
          this.lsidebarData = NestJsContent;
        }
        if (v?.courceData === courceRoute?.sequelize) {
          this.lsidebarData = SequelizeContent;
        }
      } else {
        this.lsidebarData = undefined;
      }
    }
    );
    this.sub.push(data);
    if (this.screenWidth > 750) {
      this.LsidebarTog = true;
      this.RsidebarTog = true;
    } else {
      this.LsidebarTog = false;
      this.RsidebarTog = false;
    }

  }

  scrollToTop(duration: number = 1000) {
    const startTime = performance.now();
    const startScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollStep = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startScroll * (1 - progress));
      if (progress < 1) { window.requestAnimationFrame(scrollStep); }
    };
    window.requestAnimationFrame(scrollStep);
  }


  ngOnDestroy() { this.sub.forEach((s: Subscription) => { s.unsubscribe() }); }

}
