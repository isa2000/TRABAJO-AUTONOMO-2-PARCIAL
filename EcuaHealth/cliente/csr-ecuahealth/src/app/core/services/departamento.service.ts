import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../models/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  public url_mono;
  public url_micro;
  public departamento;

  constructor(
    private _http: HttpClient
  ) {

    this.url_mono = environment.monolitico;
    this.url_micro = environment.microservicio;
    this.departamento = new Departamento('', '', '');

  }

  nuevoDepartament(data : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.post(this.url_mono + 'departamento', data, {headers : headers});

  }

  gtDepartamentos() : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url_mono + 'departamento', {headers : headers});

  }

  gtDepartamento(id : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url_mono + 'departamento/'+ id, {headers : headers});

  }

  updateDepartamento(data : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.patch(this.url_mono + 'departamento/'+ data._id, data, {headers : headers});

  }

  deleteDepartamento(id : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.delete(this.url_mono + 'departamento/'+ id, {headers : headers});

  }

  //TODO OBTENER ACTIVOS
  gtActivos() : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url_micro+ '/listado', {headers : headers});

  }

  gtActivo(id : any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this._http.get(this.url_micro + '/'+ id, {headers : headers});

  }
}
