import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../app/services/UsuarioService';
import { SeguirService } from '../../app/services/SeguirService';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public seguiList: any[] = [];

	constructor(
		public navCtrl: NavController,
		public usuarioService: UsuarioService,
		public seguirService: SeguirService) {

		this.inicializar();
	}

	public inicializar(){
  		this.usuarioService.getUsuarios().subscribe(req => 
			this.seguiList = req);
  	}

  	public suscribir(idUsuarioS:any){
  		this.seguirService.nuevoSeguir(idUsuarioS).subscribe(req =>{
  			if(req){
  				this.inicializar();
  			}
  		});
  	}

  public refrescar(){
    this.inicializar();
  }

}
