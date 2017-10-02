import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicarService } from '../../app/services/PublicarService';
import { EditarTPage } from '../editar-t/editar-t';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private publicaciones:any[] = [];

    socketHost: any;
    zone:any;
    socket:any;

	constructor(
		public navCtrl: NavController,
		public publicarService: PublicarService) 
	{
		this.inicializar();

        this.socketHost = "http://localhost:3001";
        this.zone = new NgZone({enableLongStackTrace: false});
        
        this.socket = io(this.socketHost);
        this.socket.on("twitter_post", (msg) => {
            this.zone.run(() => {
                this.inicializar();
            });
        });


	}

	public inicializar(){
		this.publicarService.getPublicar().subscribe(req => 
			this.publicaciones = req);
	}

	public verFormulario(){
		this.navCtrl.setRoot(EditarTPage);
	}

	public refrescar(){
    	this.inicializar();
  	}
}
