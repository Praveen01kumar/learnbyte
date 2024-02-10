import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LsidebarComponent } from '../lsidebar/lsidebar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularContent, JavaScriptContent, TypescriptContent, courceRoute } from '../../const/const';

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
  sidebarTog: boolean = true;
  @Input() layoutData: any;
  lsidebarData: any;
  sub: Subscription[] = [];
  constructor(private route: ActivatedRoute) { }
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
      } else {
        this.lsidebarData = undefined;
      }
    }
    );
    this.sub.push(data);
  }

  ngOnDestroy() { this.sub.forEach((s: Subscription) => { s.unsubscribe() }); }
}
