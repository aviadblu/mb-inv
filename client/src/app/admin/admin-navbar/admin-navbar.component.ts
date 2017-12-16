import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbinv-admin-navbar',
  template: `<div class="navbar-wrapper">
    <nav>
      <a mat-button>לקוחות</a>
    </nav>
  </div>`,
  styleUrls: ['./admin-navbar.component.less']
})
export class AdminNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
