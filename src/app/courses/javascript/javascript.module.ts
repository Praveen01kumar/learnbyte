import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';

@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    ContentboxComponent
  ]
})
export class JavascriptModule { }
