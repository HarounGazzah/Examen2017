import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListsTicketsComponent } from './lists-tickets/lists-tickets.component';
import { TicketComponent } from './ticket/ticket.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './ticket.service';



@NgModule({
  declarations: [
    AppComponent,
    ListsTicketsComponent,
    TicketComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
