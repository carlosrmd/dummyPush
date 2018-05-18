import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HTTP) {

  }

  answers = {
    atencion : '',
    inconveniente : '',
    comentario : ''
  }

  request = {
    user_id : this.navParams.get('user').user_id,
    answers : this.answers,
    message_id : this.navParams.get('user').message_id
  }

  url = "http://172.16.16.185:9000/v2/submit"


  submit()  {
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




