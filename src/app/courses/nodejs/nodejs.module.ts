import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeJsRoutingModule } from './nodejs-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { nodejsComponents } from 'src/app/shared/const/declarations';

@NgModule({
  declarations: [...nodejsComponents],
  imports: [
    CommonModule,
    NodeJsRoutingModule,
    ContentboxComponent
  ]
})
export class NodeJsModule { }
