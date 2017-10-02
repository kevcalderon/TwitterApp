import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './AuthService';

import 'rxjs/Rx';

@Injectable()
export class UsuarioService {
  private url:string;
  private headers:Headers;

  constructor(
    private auth:AuthService,
    private http:Http
  ) {
    this.url = "http://localhost:3000/api/v1/usuario";
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    });
  }

  public nuevoUsuario(usuario:any) {
    let data = JSON.stringify(usuario);

    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => res.json());
  }

  public editarContacto(usuario:any) {
    let data = JSON.stringify(usuario);

    return this.http.put(this.url, data, { headers: this.headers })
    .map(res => res.json());
  }

  public getUsuario() {
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public getUsuarios(){
  let uri = `${this.url}/all/`; 

    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarContacto() {
    return this.http.delete(this.url, { headers: this.headers })
    .map(res => res.json());
  }

}
