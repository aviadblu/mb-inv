import { Injectable } from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AdminClientsService {
  clients$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpService) {
    this.loadClients();
  }

  addNewClient(payload) {
    this.http.post('/api/admin-clients', payload)
      .take(1)
      .subscribe(() => {
        this.loadClients();
      });
  }

  private loadClients() {
    this.http.get('/api/admin-clients')
      .take(1)
      .subscribe((res) => {
        this.clients$.next(res);
      });
  }
}
