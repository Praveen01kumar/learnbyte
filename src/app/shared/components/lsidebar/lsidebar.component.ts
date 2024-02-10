import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

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
  currentRoute1: any;
  currentRoute: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  openedPanel() {
    this.currentRoute1 = this.currentRoute1 ? this.currentRoute1 : this.router?.url?.replace(/^\/|\/$/g, "");
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.currentRoute = evt?.url?.replace(/^\/|\/$/g, "");
        this.currentRoute1 = this.currentRoute1 ? this.currentRoute1 : this.currentRoute;
      }
    });
  }

}
