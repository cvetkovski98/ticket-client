import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Roles} from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class OperatorGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.auth.getUser().role !== Roles.OPERATOR) {
      this.router.navigate(['/tickets']);
      return false;
    } else {
      return true;
    }
  }
}
