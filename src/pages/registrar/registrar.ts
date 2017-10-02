import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioService } from '../../app/services/UsuarioService';
/**
 * Generated class for the RegistrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
	private usuario:any = {
    	nick: "",
    	contrasena: "",
    	nombre: "",
    	apellido: ""
  	}

	constructor(
  		public navCtrl: NavController,
	    public navParams: NavParams,
	    public toast: ToastController,
	    public loading: LoadingController,
	    public usuarioService: UsuarioService
	    ) {
	}

	ionViewDidLoad() {

	}

	public iniciarSesion(){
		this.usuarioService.nuevoUsuario(this.usuario).subscribe(res => {
			this.navCtrl.setRoot(LoginPage);
		});
	}

}
