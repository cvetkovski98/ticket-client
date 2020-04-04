import {Routes} from '@angular/router';
import {TicketListComponent} from './app/ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './app/ticket-details/ticket-details.component';
import {RegisterComponent} from './app/register/register.component';
import {LoginComponent} from './app/login/login.component';
import {TicketCreateComponent} from './app/ticket-create/ticket-create.component';
import {AuthGuardService} from './app/services/auth/authguard.service';
import {OperatorGuardService} from './app/services/auth/operatorguard.service';

export const routes: Routes = [
  {path: 'tickets', component: TicketListComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
  {path: 'tickets/create', component: TicketCreateComponent, pathMatch: 'full', canActivate: [AuthGuardService, OperatorGuardService], runGuardsAndResolvers: 'always'},
  {path: 'tickets/:ticket_id', component: TicketDetailsComponent, pathMatch: 'full', canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'tickets'}
];
