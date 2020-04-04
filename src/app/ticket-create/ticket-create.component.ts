import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../services/ticket/ticket.service';
import {CreateTicket} from '../models';
import {TicketStatus} from '../../constants';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  newTicket = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  });
  statuses = TicketStatus.getAll();

  constructor(private ticketService: TicketService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.newTicket.valid) {
      const t: CreateTicket = this.newTicket.value;
      this.ticketService.createTicket(t);
    }
  }
}
