import {Component, OnInit} from '@angular/core';
import {TicketService} from '../services/ticket/ticket.service';
import {DisplayTicket, Ticket} from '../models';
import {AuthService} from '../services/auth/auth.service';
import {TicketStatus} from '../../constants';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[];
  displayList: DisplayTicket[];

  constructor(private ticketService: TicketService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.ticketService.fetchTickets().subscribe(
      data => {
        this.ticketList = data;
        this.displayList = this.ticketList.map(item => {
          return {
            ticket: item,
            badgeClass: TicketStatus.getBadgeClass(item.status)
          };
        });
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
