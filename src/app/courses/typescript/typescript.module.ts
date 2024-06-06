import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { typescriptComponents } from 'src/app/shared/const/declarations';


@NgModule({
  declarations: [...typescriptComponents ],
  imports: [
    CommonModule,
    TypescriptRoutingModule,
    ContentboxComponent
  ]
})
export class TypescriptModule { }
