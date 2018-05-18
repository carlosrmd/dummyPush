import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer',
  templateUrl: 'transfer.html',
})
export class TransferPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
                console.log("Tamos en transfer mandril");
                this.data = this.navParams.get('data');
                console.log(this.data)
  }
  data = {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPage');
  }

}
