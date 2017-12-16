import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbinv-admin-main',
  template:`
  <div>
    <mbinv-admin-navbar></mbinv-admin-navbar>
    <router-outlet></router-outlet>
  </div>`
})
export class AdminMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
