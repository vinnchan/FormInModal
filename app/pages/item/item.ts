import {Component} from '@angular/core';
import {NavController, Modal, NavParams, LoadingController, ModalController} from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {CartPage} from "../cart/cart";
import {ModalPage} from "../modal/modal";

declare let oauthSignature: any;
declare let sjcl: any;
declare let encodeString: any;
declare let OAuth: any;
declare let sanitizeHtml: any;
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/item/item.html',
})
export class ItemPage {
  // item info
  private item: any;
  prod:any;
  reviews:any;
  orders:any;
  customers:any;
  attributes:any = [];
  short_description:string;



  constructor( public modalCtrl: ModalController, public loadingCtrl: LoadingController, public nav: NavController, navParams: NavParams, public http: Http) {


    //console.log();
  }


  openModal() {

      let modal = this.modalCtrl.create(ModalPage);
      modal.present();
  }

  goToCart() {

      this.nav.setRoot(CartPage);
  }



}
