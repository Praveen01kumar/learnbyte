import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { PrismcodeComponent } from 'src/app/shared/components/prismcode/prismcode.component';
import { angularComponents } from 'src/app/shared/const/declarations';

@NgModule({
  declarations: [...angularComponents],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ContentboxComponent,
    PrismcodeComponent
  ]
})
export class AngularModule { }
