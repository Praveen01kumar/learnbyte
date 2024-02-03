import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './lesssion/intro/intro.component';
import { TypescriptRoutingModule } from './typescript-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    TypescriptRoutingModule
  ]
})
export class TypescriptModule { }
