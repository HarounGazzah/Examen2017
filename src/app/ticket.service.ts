import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  url = '../assets/tickets.json';


  getAll() {
     return this.http.get(this.url);
  }
}
