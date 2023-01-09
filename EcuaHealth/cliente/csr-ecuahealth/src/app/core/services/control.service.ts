import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Control } from '../models/control.model';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  public url;
  public control;

  constructor(
    private _http : HttpClient,
  ) {
    this.url = environment.monolitico;
    this.control = new Control('', '','', 0,'', '')
  }

  nuevoControl(data : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.post(this.url + 'control', data, {headers : headers});

  }

  gtControles() : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url + 'control', {headers : headers});

  }

  gtControl(id : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url + 'control/'+ id, {headers : headers});

  }

  updateControl(data : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.patch(this.url + 'control/'+ data._id, data, {headers : headers});

  }

  deleteControl(id : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.delete(this.url + 'control/'+ id, {headers : headers});

  }
}
