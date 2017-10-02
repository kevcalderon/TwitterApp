import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './AuthService';

import 'rxjs/Rx';

@Injectable()
export class PublicarService {
  private url:string;
  private headers:Headers;

  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.url = "http://localhost:3000/api/v1/publicar";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  public nuevoPublicar(publicar:any) {
    let data = JSON.stringify(publicar);

    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => res.json());
  }

  public getPublicar(){
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public getPublicarAll(){
    let uri = `${this.url}/all`;

    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarPublicar(idPublicacion:any) {
    let uri = `${this.url}/${idPublicacion}`;

    return this.http.delete(uri, { headers: this.headers })
    .map(res => res.json());
  }

}
