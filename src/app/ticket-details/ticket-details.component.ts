import {Component, OnInit} from '@angular/core';
import {TicketService} from '../services/ticket/ticket.service';
import {ActivatedRoute} from '@angular/router';
import {Comment, CreateComment, Ticket, User} from '../models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth/auth.service';
import {Roles, TicketStatus} from '../../constants';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket;
  badgeClass: string;
  statuses = TicketStatus.getAll();
  comment: FormGroup;
  assigneeOptions: User[];

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private auth: AuthService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('ticket_id');
    this.ticketService.fetchTicket(id).subscribe(
      data => {
        this.ticket = data;
        this.badgeClass = TicketStatus.getBadgeClass(this.ticket.status);
        this.comment = new FormGroup({
          content: new FormControl('', Validators.required),
          status: new FormControl(this.ticket.status),
          assignee: new FormControl(this.ticket.assignee?.id)
        });
      }
    );
    this.ticketService.getUsersByType(Roles.FIELD_AGENT).subscribe(
      data => {
        this.assigneeOptions = data;
      }
    );
  }

  saveComment(): void {
    if (this.comment.valid) {
      const newStatus: CreateComment = {
        timestamp: '',
        content: this.comment.get('content').value,
        written_by: '',
        statusChangedTo: this.comment.get('status').value,
        assignee: this.comment.get('assignee').value
      };
      this.ticketService.addComment(newStatus, this.ticket.id).subscribe(
        data => {
          const createdComment: Comment = {
            content: data.content,
            timestamp: data.timestamp,
            written_by: this.auth.getUser(),
            statusChangedTo: data.statusChangedTo,
            assignee: data.assignee
          };
          this.ticket.comments.push(createdComment);
          this.ticket.status = data.statusChangedTo;
          this.badgeClass = TicketStatus.getBadgeClass(this.ticket.status);
          this.comment.get('content').reset();
        }
      );
    }
  }
}
