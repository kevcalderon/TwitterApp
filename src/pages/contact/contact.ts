import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeguirService } from '../../app/services/SeguirService';
import { UsuarioService } from '../../app/services/UsuarioService';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	public seguiList: any[] = [];
	public usuario:any = {
		idSeguir : 0,
		idUsuario : 0,
		nombre : "",
		apellido : "",
		nick : "",
		contrasena : ""
	}

  constructor(
  	public navCtrl: NavController,
  	public seguirService: SeguirService,
  	public usuarioService: UsuarioService) {

  	this.usuarioService.getUsuario().subscribe(res => {
  		this.usuario = res;
  		this.inicializar();
  	});
  }

  public inicializar(){
  	this.seguirService.getSeguir().subscribe(req => 
			this.seguiList = req);
  }

  public eliminar(idUsuario: any){
    this.seguirService.eliminarSeguir(idUsuario).subscribe(req =>{
      if(req){
        this.inicializar();
      }
    });
  }

  public refrescar(){
    this.inicializar();
  }

}
