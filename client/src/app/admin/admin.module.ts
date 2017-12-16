import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {AdminMainComponent} from './admin-main/admin-main.component';
import {AdminNavbarComponent} from './admin-navbar/admin-navbar.component';
import {AdminClientsComponent} from './admin-clients/admin-clients.component';
import {AppRoutingModule} from "../app-routing.module";
import {AddClientModalComponent} from './admin-clients/add-client-modal/add-client-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminClientsService} from "./services/admin-clients.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
    AdminClientsComponent
  ],
  providers: [
    AdminClientsService
  ]
})
export class AdminModule {
}
