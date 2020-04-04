import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginDetails} from '../models';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCredentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginCredentials.valid) {
      const loginCredentials: LoginDetails = this.loginCredentials.value;
      this.auth.login(loginCredentials);
    }
  }

}
