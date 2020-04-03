import {Component, OnInit} from '@angular/core';
import {TicketService} from '../services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
    this.ticketService.fetchTicket('12bsacx41sda12421mc').subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
