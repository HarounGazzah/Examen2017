import { Ticket } from './../Ticket';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


@Input() ticket: Ticket;

showDetail: boolean;
cancelDiv = true;


showDetails() {
this.showDetail = !this.showDetail;
}


cancel() {
this.cancelDiv = false;
}


  constructor() { }

  ngOnInit() {
  }

}
