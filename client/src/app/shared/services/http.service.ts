import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';

import {MatSnackBar} from "@angular/material";

@Injectable()
export class HttpService {
  private ctx = {
    userId: 0,
    admin: false
  };

  private headers;

  constructor(private angularHttp: Http,
              private snackBar: MatSnackBar) {
    this.createCtxHeader();
  }

  private createCtxHeader() {
    this.headers = new Headers();
    this.headers.append('Ctx', btoa(JSON.stringify(this.ctx)));
  }

  private createOptions(options) {
    if (!options) {
      return {
        headers: this.headers
      }
    } else if (!options.headers) {
      options.headers = this.headers;
      return options;
    } else {
      const keys = this.headers.keys();
      let i = 0;
      this.headers.forEach(val => {
        options.headers.append(keys[i], val[i]);
        i++;
      });
      return options;
    }
  }

  private handleResponseError(error) {
    let message = error.toString();
    if (error._body) {
      const b = JSON.parse(error._body);
      message = b.message || b.detail;
    }
    this.snackBar.open(`Error ${error.status} ${error.statusText} => Details: ${message}`, "close");
    return Observable.throw(new Error(error));
  }

  get (url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.angularHttp.get(url, this.createOptions(options))
      .map(res => res.json())
      .catch(err => {
        return this.handleResponseError(err);
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.angularHttp.post(url, body, this.createOptions(options))
      .map(res => res.json())
      .catch(err => {
        return this.handleResponseError(err);
      });
  }


  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.angularHttp.put(url, body, this.createOptions(options))
      .map(res => res.json())
      .catch(err => {
        return this.handleResponseError(err);
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.angularHttp.delete(url, this.createOptions(options))
      .map(res => res.json())
      .catch(err => {
        return this.handleResponseError(err);
      });
  }

}
