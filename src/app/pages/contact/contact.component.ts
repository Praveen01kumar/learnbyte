import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { Gbsearch } from 'src/app/shared/components/gbsearch/gbsearch.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { emailValidator } from 'src/app/shared/const/const';

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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  commentForm!: FormGroup;
  sub: boolean = false;

  ngOnInit(): void {
    this.userCommentForm();
  }

  get f() { return this.commentForm?.controls }

  userCommentForm() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16),]],
      email: ['', [Validators.required, Validators.email, emailValidator]],
    });
  }

  onComment() {
    this.sub = true;
    if (this.commentForm?.invalid) { return; }
    const fvalue = this.commentForm?.value;
    const payload = { comment: fvalue?.comment, name: fvalue?.name, email: fvalue?.email };
  }

}
