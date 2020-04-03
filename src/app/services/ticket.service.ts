import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../models';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  fetchTickets(): Observable<Ticket[]> {
    const url = this.baseUrl + '/tickets';
    return this.http.get<Ticket[]>(url);
  }

  fetchTicket(ticketId: string): Observable<Ticket> {
    const url = this.baseUrl + '/tickets/' + ticketId;
    return this.http.get<Ticket>(url);
  }

  createTicket(ticket: Ticket): Observable<any> {
    const url = this.baseUrl + '/tickets/create';
    return this.http.post(url, ticket);
  }
}
