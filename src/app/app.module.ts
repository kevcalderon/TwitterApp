import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomeFormPage } from '../pages/home/home-form';
import { RegistrarPage } from '../pages/registrar/registrar';
import { EditarPage } from '../pages/editar/editar';
import { EditarTPage } from '../pages/editar-t/editar-t';

import { UsuarioService } from './services/UsuarioService';
import { AuthService } from './services/AuthService';
import { PublicarService } from './services/PublicarService';
import { SeguirService } from './services/SeguirService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HomeFormPage,
    RegistrarPage,
    EditarPage,
    EditarTPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HomeFormPage,
    RegistrarPage,
    EditarPage,
    EditarTPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    AuthService,
    PublicarService,
    SeguirService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
