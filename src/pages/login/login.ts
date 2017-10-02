import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../app/services/AuthService';
import { TabsPage } from '../tabs/tabs';
import { RegistrarPage } from '../registrar/registrar';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	private usuario:any = {
    	nick: "",
    	contrasena: ""
  	}

	constructor(
		public navCtrl: NavController,
	    public navParams: NavParams,
	    public toast: ToastController,
	    public loading: LoadingController,
	    public auth:AuthService
    ) {
	}

	ionViewDidLoad() {
	
	}

	public iniciarSesion(){
		this.auth.autenticacion(this.usuario).subscribe(res => {
			if(res.estado){
				this.navCtrl.setRoot(TabsPage);
			}else{
				this.usuario.nick = "";
				this.usuario.contrasena = "";
			}
		});
	}

	public formularioRegistrar(){
		this.navCtrl.setRoot(RegistrarPage);
	}

}
