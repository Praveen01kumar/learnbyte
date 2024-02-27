import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter } from 'rxjs';

@Component({
  selector: 'lsidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatTooltipModule
  ],
  templateUrl: './lsidebar.component.html',
  styleUrls: ['./lsidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LsidebarComponent implements OnInit {
  @Input() lsidebarData: any;
  panelOpenState = false;
  currentRoute: string = '';
  currentRoute1: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.openedPanel(this.router?.url);
  }

  openedPanel(url: string) {
    this.currentRoute1 = url;
    this.currentRoute = url?.replace(/^\/|\/$/g, "");
    this.currentRoute = this.currentRoute.substring(0, this.currentRoute.lastIndexOf('/'));
  }

  gotoRout(url: string) {
    this.router.navigate([url]);
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.openedPanel(event?.url);
    });
  }

  openedInnerPanel() {
    this.openedPanel(this.router?.url);
  }


}
