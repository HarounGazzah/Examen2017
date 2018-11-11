import { Ticket } from './../Ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-tickets',
  templateUrl: './lists-tickets.component.html',
  styleUrls: ['./lists-tickets.component.css']
})
export class ListsTicketsComponent implements OnInit {

ticket = new Ticket();

listTickets: Ticket[] = [];


save() {
  this.listTickets.push(this.ticket);
  this.ticket = new Ticket();
  this.ticket.id = this.listTickets.length + 1;
}

constructor() { }

  ngOnInit() {
   this.ticket.id = 1;
  }

}



// listTickets: Ticket[] = [];

// id: number;
// title: string;
// assignedTo: string;
// doing: number;
// description: string;

// ticket = new Ticket();

// saveTicket(id: any, title: any, assignedTo: any, doing: any, description: any) {

// this.listTickets.push({
//     id: this.listTickets.length + 1,
//     title : title,
//     assignedTo : assignedTo,
//     doing : doing,
//     description : description});
// }

