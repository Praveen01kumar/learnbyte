import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ContentboxComponent
  ]
})
export class TypescriptModule { }
