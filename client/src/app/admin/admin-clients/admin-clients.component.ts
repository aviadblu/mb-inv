import {Component, OnInit} from '@angular/core';
import {AddClientModalComponent} from "./add-client-modal/add-client-modal.component";
import {MatDialog} from "@angular/material";
import {AdminClientsService} from "../services/admin-clients.service";

@Component({
  selector: 'mbinv-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.less']
})
export class AdminClientsComponent implements OnInit {
  clients$;
  constructor(private dialog: MatDialog,
              private adminClientsSvc: AdminClientsService) {
    this.clients$ = adminClientsSvc.clients$;
  }

  ngOnInit() {
  }

  openAddClientModal() {
    let dialogRef = this.dialog.open(AddClientModalComponent, {
      height: '220px',
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
