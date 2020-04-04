import {Component, OnInit} from '@angular/core';
import {User} from '../models';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User | null;
  isLoggedIn = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.currentUser = this.auth.getUser();
    this.auth.loggedIn.subscribe(
      data => {
        this.isLoggedIn = data;
        this.currentUser = this.auth.getUser();
      }
    );
  }

  logout(): void {
    this.auth.logout();
  }
}
