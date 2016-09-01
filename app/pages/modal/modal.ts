import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, SqlStorage, Storage} from 'ionic-angular';
import { FormBuilder, Validators} from '@angular/common';
import {CartPage} from "../cart/cart";



/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal/modal.html',

})
export class ModalPage {

  public variation: any;
  private storage: Storage;

  prod:any;


  //optionID:any;

  constructor(public fb: FormBuilder, public viewCtrl: ViewController, public nav: NavController, private navParams: NavParams) {

    this.variation = this.fb.group({
        'color': ['',Validators.required]
    });
  }


  onSubmit() {
        this.goToCart();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  goToCart() {
    this.nav.setRoot(CartPage);
  }



}
