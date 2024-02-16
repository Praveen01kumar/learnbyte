import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    this.openedPanel();
  }

  openedPanel() {
    this.currentRoute1 = this.router?.url;
    this.currentRoute = this.router?.url?.replace(/^\/|\/$/g, "");
    this.currentRoute = this.currentRoute.substring(0, this.currentRoute.lastIndexOf('/'));
  }

  gotoRout(url:string){
    this.router.navigate([url]);
  }

}
