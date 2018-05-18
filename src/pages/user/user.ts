import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';



@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: HTTP) {

  }
  //registerUser can only be run on device
  //to run on device: ionic cordova run android --device --stacktrace
  
}

@Component({
  selector: 'user',
  template: `
  <form (ngSubmit)="registerUser()">
    <ion-item>
      <ion-label color="primary" floating>URL</ion-label>
      <ion-input type="text" [(ngModel)]="url" name="url"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label color="primary" floating>Name</ion-label>
      <ion-input type="text" [(ngModel)]="request.name" name="name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label color="primary" floating>User Id</ion-label>
      <ion-input type="text" [(ngModel)]="request.user_id" name="user_id"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label color="primary" floating>Hash</ion-label>
      <ion-input [(ngModel)]="request.user_hash" name="user_hash"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label color="primary" floating>Device Id</ion-label>
      <ion-input [(ngModel)]="request.device_id" name="device_id"></ion-input>
    </ion-item>
    <button ion-button type="submit" block>Register user!</button>
  </form>
  `
})
export class UserRegisterForm extends UserPage {
  request = {
    "name": "Joseph Stalin",
    "user_id": "jstalinbolsheviks",
    "user_hash": "detektivbyrån",
    "device_id": "BLABLEBLIBLOLBU"
  }
  headers = {
    "Content-Type": "application/json"
  }
  url = "http://172.16.16.185:9000/v2/user"
  
  registerUser() {
    console.log(this.request)
    this.http.setDataSerializer('json');
    this.http.post(this.url,this.request,{
      "Content-Type": "application/json"
    })
    .then(data => {
      console.log(data.data)
    })
    .catch(error => {
      console.log(error.error)
    });
  }
}



