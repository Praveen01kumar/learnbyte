import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressRoutingModule } from './expressjs-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { expressjsComponents } from 'src/app/shared/const/declarations';

@NgModule({
  declarations: [...expressjsComponents],
  imports: [
    CommonModule,
    ExpressRoutingModule,
    ContentboxComponent
  ]
})
export class ExpressModule { }
