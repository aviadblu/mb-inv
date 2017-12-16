import { Component, OnInit } from '@angular/core';
import {AddClientModalComponent} from "./add-client-modal/add-client-modal.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'mbinv-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.less']
})
export class AdminClientsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddClientModal() {
    let dialogRef = this.dialog.open(AddClientModalComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
