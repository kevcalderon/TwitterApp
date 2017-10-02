import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { PublicarService } from '../../app/services/PublicarService';
import { HomeFormPage } from '../home/home-form';

@Component({
  selector: 'page-editar-t',
  templateUrl: 'editar-t.html',
})
export class EditarTPage {
	private publicaciones:any[] = [];

	constructor(
		public navCtrl: NavController,
    	public navParams: NavParams,
		public publicarService: PublicarService) {

		this.inicializar();
	}

	ionViewDidLoad() {

	}

	public inicializar(){
		this.publicarService.getPublicarAll().subscribe(req => 
			this.publicaciones = req);
	}

	public verFormulario(){
		this.navCtrl.setRoot(HomeFormPage);
	}

	public refrescar(){
		this.inicializar();
	}

	public eliminar(idPublicar: any){
		this.publicarService.eliminarPublicar(idPublicar).subscribe(req =>{
			if(req){
				this.inicializar();
			}
		});
	}

}
