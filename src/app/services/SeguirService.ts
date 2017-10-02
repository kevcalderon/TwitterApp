import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './AuthService';

import 'rxjs/Rx';

@Injectable()
export class SeguirService {
  private url:string;
  private headers:Headers;

  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.url = "http://localhost:3000/api/v1/seguir";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  public nuevoSeguir(idUsuarioS:any) {
    let uri = `${this.url}/${idUsuarioS}`;
    let data = {

    }
    
    return this.http.post(uri, data, { headers: this.headers })
    .map(res => res.json());
  }

  public getSeguir(){
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarSeguir(idUsuario:any) {
    let uri = `${this.url}/${idUsuario}`;

    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}
