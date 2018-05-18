import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { TransferPage } from '../transfer/transfer';
import { ProductPage } from '../product/product';
import { AboutPage } from '../about/about';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
  })
  export class LoginPage {
  
    constructor(public navCtrl: NavController,
      public alertCtrl: AlertController,
      public navParams: NavParams,
      public http: HTTP) {
        console.log(this.navParams.get('openNext'))
        
    }

    loginRequest = {
        'username' : '',
        'password': ''
    }

    pages = {
        'transfer' : TransferPage,
        'product' : ProductPage,
        'submit' : AboutPage
    }

    close() {
        this.navCtrl.pop();
    }

    performLogin() {
        console.log(this.loginRequest)
        if(this.loginRequest.username == "john.wick" && this.loginRequest.password == "12345") {
            let alert = this.alertCtrl.create({
                title: "Login",
                subTitle: "Login succesful",
                buttons: ["Ok"]
            });
            alert.present();
            this.navCtrl.push(this.pages[this.navParams.get('openNext')],{'data': this.navParams.data})
        } else {
            let alert = this.alertCtrl.create({
                title: "Login",
                subTitle: "The provided credentials are not valid",
                buttons: ["Ok"]
            });
            alert.present();
        }
    }



    
  }