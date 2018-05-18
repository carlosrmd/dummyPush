import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TransferPage } from '../transfer/transfer';
import { FCM } from '@ionic-native/fcm';
import { HTTP } from '@ionic-native/http';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    platform: Platform,
     public fcm: FCM,
     private http: HTTP) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.fcm.getToken().then(token => {
        console.log("El token es");
        console.log(token);
        this.http.setDataSerializer('json');
        this.request.user_hash = token
        console.log(this.request)
        this.http.post(this.url,this.request,{
          "Content-Type": "application/json"
        })
        .then(data => {
          console.log(data.data)
        })
        .catch(error => {
          console.log(error.error)
        });
      });


      this.fcm.onNotification().subscribe( data => {
        
        if(data.wasTapped) {
          console.log("Received in background ");
          console.log(data);
          this.data = data
          this.openLogin();
        } else {
          console.log("Received in foreground ");
          console.log(data);
          alert("Notification received") 
        };
      })

    });
  }

  data = null
  value = 'transfer'
  url = "http://172.16.16.185:9001/v2/user"
  request = {
    "name": "Carlos Martinez",
    "user_id": "nexus",
    "user_hash": "",
    "device_id": "54321"
  }

  openLogin() {
    this.navCtrl.push(LoginPage,this.data)
  }



}

