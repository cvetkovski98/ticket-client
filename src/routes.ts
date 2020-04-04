import {Routes} from '@angular/router';
import {TicketListComponent} from './app/ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './app/ticket-details/ticket-details.component';
import {RegisterComponent} from './app/register/register.component';
import {LoginComponent} from './app/login/login.component';
import {TicketCreateComponent} from './app/ticket-create/ticket-create.component';

export const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/create', component: TicketCreateComponent, pathMatch: 'full'},
  {path: 'tickets/:ticket_id', component: TicketDetailsComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'tickets'}
];
