import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {AdminMainComponent} from './admin-main/admin-main.component';
import {AdminNavbarComponent} from './admin-navbar/admin-navbar.component';
import {AdminClientsComponent} from './admin-clients/admin-clients.component';
import {AppRoutingModule} from "../app-routing.module";
import {AddClientModalComponent} from './admin-clients/add-client-modal/add-client-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    AddClientModalComponent
  ],
  declarations: [
    AdminMainComponent,
    AdminNavbarComponent,
    AdminClientsComponent,
    AddClientModalComponent],
  exports: [
    AdminMainComponent,
    AdminClientsComponent]
})
export class AdminModule {
}
