import {Routes} from '@angular/router';
import {TicketListComponent} from './app/ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './app/ticket-details/ticket-details.component';

export const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/:ticket_id', component: TicketDetailsComponent},
  {path: '**', redirectTo: 'tickets'}
];
