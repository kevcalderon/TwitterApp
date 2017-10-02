import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioService } from '../../app/services/UsuarioService';

/**
 * Generated class for the EditarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
	private usuario:any = {
    	contrasena: "",
    	nombre: "",
    	apellido: "",
    	idUsuario: 0
  	}

  constructor(
  		public navCtrl: NavController,
	    public navParams: NavParams,
	    public toast: ToastController,
	    public loading: LoadingController,
	    public usuarioService: UsuarioService) {

  		this.usuarioService.getUsuario().subscribe(res => this.usuario = res[0]);
  }

  ionViewDidLoad() {
    
  }

  public guardar(){
  	this.usuarioService.editarContacto(this.usuario).subscribe(res => {
  		if(res){

  		}	
  	});
  }

  public eliminar(){
  	this.usuarioService.eliminarContacto().subscribe(res => {
  		this.navCtrl.setRoot(LoginPage);
  	})
  }

  public salir() {
      localStorage.removeItem('token');
      window.location.reload(true);
      //this.navCtrl.push(LoginPage);
  }

}
