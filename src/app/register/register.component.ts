import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {UserRegistrator} from '../models';
import * as uuid from 'uuid';
import {Roles} from '../../constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  roles = Roles.getAll();
  newUser: FormGroup;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.newUser = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip_code: new FormControl('', Validators.required)
      })
    });
  }

  onSubmit(): void {
    if (this.newUser.valid) {
      const newUser: UserRegistrator = this.newUser.value;
      newUser.id = uuid.v4();
      this.auth.register(newUser);
    }
  }

}
