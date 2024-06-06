import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptRoutingModule } from './javascript-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { PrismcodeComponent } from 'src/app/shared/components/prismcode/prismcode.component';
import { javascriptComponents } from 'src/app/shared/const/declarations';

@NgModule({
  declarations: [...javascriptComponents],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    ContentboxComponent,
    PrismcodeComponent
  ]
})
export class JavascriptModule { }
