import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator, passStrenValidator, spaceNotAllowed } from '../../const/const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  sub: boolean = false;
  sub1: boolean = false;
  logForm: boolean = true;
  constructor(private fb: FormBuilder) { }
  LoginForm!: FormGroup;
  RegisterForm!: FormGroup;

  ngOnInit(): void {
    this.userLoginForm();
  }

  get f() { return this.RegisterForm?.controls }
  get f1() { return this.LoginForm?.controls }

  userLoginForm() {
    this.RegisterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), spaceNotAllowed, passStrenValidator]],
    });

    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, emailValidator]],
      password: ['', [Validators.required]],
    });

  }


  onlogIn() {
    this.sub1 = true;
    if (this.LoginForm?.invalid) { return; }
    const fvalue = this.LoginForm?.value;
    const payload = { email: fvalue?.email, password: fvalue?.password };
    debugger
  }

  onRegister() {
    this.sub = true;
    if (this.RegisterForm?.invalid) { return; }
    const fvalue = this.RegisterForm?.value;
    const payload = { email: fvalue?.email, password: fvalue?.password };
    debugger
  }
}
