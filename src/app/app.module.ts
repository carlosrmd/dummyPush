import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { UserPage } from '../pages/user/user';
import { UserRegisterForm } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { TransferPage } from '../pages/transfer/transfer';
import { ProductPage } from '../pages/product/product';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HTTP } from '@ionic-native/http';
import { FCM } from '@ionic-native/fcm';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UserPage,
    LoginPage,
    HomePage,
    TabsPage,
    TransferPage,
    ProductPage,
    UserRegisterForm
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UserPage,
    LoginPage,
    HomePage,
    TransferPage,
    ProductPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    FCM,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
