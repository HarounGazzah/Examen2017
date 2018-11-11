import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveComponent } from './archive/archive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsTicketsComponent } from './lists-tickets/lists-tickets.component';

const routes: Routes = [
  { path: '', component: ListsTicketsComponent },
  { path: 'list', component: ListsTicketsComponent },
  { path: 'archive', component: ArchiveComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
