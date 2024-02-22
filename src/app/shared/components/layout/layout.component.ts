import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LsidebarComponent } from '../lsidebar/lsidebar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularContent, ExpressJsContent, JavaScriptContent, NestJsContent, NodeJsContent, SequelizeContent, TypescriptContent, courceRoute } from '../../const/const';
import { HLayOut } from '../../interfaces/interfaces';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LsidebarComponent,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  sidebarTog: boolean = false;
  screenWidth: number;
  @Input() layoutData!: HLayOut;
  lsidebarData: any;
  sub: Subscription[] = [];
  constructor(private route: ActivatedRoute) { this.screenWidth = window?.innerWidth; }
  @HostListener('window:resize', ['$event'])
  onResize() { this.screenWidth = window?.innerWidth; this.sidebarTog = this.screenWidth > 750 ? true : false; }
  ngOnInit() {
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
    this.sidebarTog = this.screenWidth > 750 ? true : false;
  }

  ngOnDestroy() { this.sub.forEach((s: Subscription) => { s.unsubscribe() }); }
  



}
