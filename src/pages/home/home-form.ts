import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { PublicarService } from '../../app/services/PublicarService';
import { HomePage } from './home';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-home-form',
  templateUrl: 'home-form.html',
})
export class HomeFormPage implements OnInit {
  private parametro:string;
  private titulo:string;

  socketHost: any;
    zone:any;
    socket:any;

  private publicacion:any = {
    descripcion: ""
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public publicarService: PublicarService,
    public contactoAlert: AlertController
  ) {
        this.socketHost = "http://localhost:3001";
        this.zone = new NgZone({enableLongStackTrace: false});
        
        this.socket = io(this.socketHost);
        this.socket.on("twitter_post", (msg) => {
            this.zone.run(() => {
            });
        });
  }

  ngOnInit() {}

  public guardar() {
    this.publicarService.nuevoPublicar(this.publicacion).subscribe(res =>{
      this.socket.emit("twitter_post", this.publicacion);
      if(res){
        this.navCtrl.push(HomePage);
      }else{
        this.publicacion.descripcion = "";
      }
    })
  }
}
