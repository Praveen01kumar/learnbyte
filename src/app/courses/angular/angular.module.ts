import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularRoutingModule } from './angular-routing.module';
import { IntroComponent } from './lesssion/intro/intro.component';



@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
