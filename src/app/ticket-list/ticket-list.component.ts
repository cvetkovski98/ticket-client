import { Component, OnInit } from '@angular/core';
import {TicketService} from '../services/ticket.service';
import {Ticket} from '../models';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[];
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.fetchTickets().subscribe(
      data => {
        this.ticketList = data;
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
