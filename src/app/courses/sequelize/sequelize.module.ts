import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequelizeRoutingModule } from './sequelize-routing.module';
import { ContentboxComponent } from 'src/app/shared/components/contentbox/contentbox.component';
import { sequelizeComponent } from 'src/app/shared/const/declarations';

@NgModule({
  declarations: [...sequelizeComponent],
  imports: [
    CommonModule,
    SequelizeRoutingModule,
    ContentboxComponent
  ]
})
export class SequelizeModule { }
