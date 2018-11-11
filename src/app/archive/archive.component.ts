import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../Ticket';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  listTicket: Ticket[];

  constructor(private ticketService: TicketService) { }


  ngOnInit() {

     this.ticketService.getAll().
     subscribe(
       data => {
       this.listTicket = data;
      });

  }

}
