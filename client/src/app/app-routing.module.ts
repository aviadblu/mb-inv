import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminMainComponent} from "./admin/admin-main/admin-main.component";
import {AdminClientsComponent} from "./admin/admin-clients/admin-clients.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      {
        path: 'clients',
        component: AdminClientsComponent
      },
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
