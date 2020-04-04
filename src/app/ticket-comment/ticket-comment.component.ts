import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../models';

@Component({
  selector: 'app-ticket-comment',
  templateUrl: './ticket-comment.component.html',
  styleUrls: ['./ticket-comment.component.css']
})
export class TicketCommentComponent implements OnInit {
  @Input()
  comment: Comment;

  constructor() {
  }

  ngOnInit(): void {
  }

}
