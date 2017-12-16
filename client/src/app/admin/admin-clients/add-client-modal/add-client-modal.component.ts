import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AdminClientsService} from "../../services/admin-clients.service";

@Component({
  selector: 'mbinv-add-client-modal',
  template: `
    <div>
      <form [formGroup]="newClientForm" (ngSubmit)="submit()" novalidate>
        <mat-input-container>
          <input placeholder="Name" aria-label="" matInput formControlName="name">
        </mat-input-container>
        <mat-input-container>
          <input placeholder="Email" aria-label="" matInput formControlName="email">
        </mat-input-container>
        <button mat-raised-button [mat-dialog-close]="false">
          סגור
        </button>
        <button mat-raised-button type="submit" color="primary">
          הוסף
        </button>
      </form>
    </div>
  `
})
export class AddClientModalComponent implements OnInit {
  public newClientForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddClientModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public adminClientsSvc: AdminClientsService) {
  }

  ngOnInit() {
    this.newClientForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
    });
  }

  submit() {
    if (this.newClientForm.valid) {
      this.adminClientsSvc.addNewClient(this.newClientForm.value);
      this.dialogRef.close(true);
    }
  }

}
