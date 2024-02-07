import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularRoutingModule } from './angular-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { LsidebarComponent } from 'src/app/shared/components/lsidebar/lsidebar.component';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    HeaderComponent,
    FooterComponent,
    LsidebarComponent,
    LayoutComponent,
    ContentboxComponent
  ]
})
export class AngularModule { }
