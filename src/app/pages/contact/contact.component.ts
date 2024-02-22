import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { Gbsearch } from 'src/app/shared/components/gbsearch/gbsearch.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    Gbsearch,
    CommonModule,
    RouterModule,
  ]
})
export class ContactComponent {

}
