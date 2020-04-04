import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateComment, CreateTicket, Ticket, User} from '../../models';
import {AuthService} from '../auth/auth.service';
import * as uuid from 'uuid';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl = environment.url;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
  }

  fetchTickets(): Observable<Ticket[]> {
    const url = this.baseUrl + '/tickets';
    return this.http.get<Ticket[]>(url);
  }

  fetchTicket(ticketId: string): Observable<Ticket> {
    const url = this.baseUrl + '/tickets/' + ticketId;
    return this.http.get<Ticket>(url);
  }

  createTicket(ticket: CreateTicket): any {
    const url = this.baseUrl + '/tickets/create';
    ticket.created_by = this.auth.getUser().id;
    ticket.id = uuid.v4();
    ticket.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    ticket.comments = [];
    this.http.post(url, ticket).subscribe(
      () => {
        return this.router.navigate(['/tickets']);
      }
    );
  }

  addComment(comment: CreateComment, ticketId: string): Observable<CreateComment> {
    const url = this.baseUrl + '/tickets/comment/' + ticketId;
    comment.timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    comment.written_by = this.auth.getUser().id;
    return this.http.post<CreateComment>(url, comment);
  }

  getUsersByType(type: string): Observable<User[]> {
    const url = this.baseUrl + '/users';
    const p = new HttpParams().set('role_type', type);
    return this.http.get<User[]>(url, {params: p});
  }
}
