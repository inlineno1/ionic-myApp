import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage({name : 'homePage'})
@IonicPage()
@Component({

  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  disabledSwitch:boolean = false;
  userName:any;

  items = [
    {"id":1,"name":"첫번쩨 아이템"},
    {"id":2,"name":"두번쩨 아이템"},
    {"id":3,"name":"세번쩨 아이템"},
    {"id":4,"name":"네번쩨 아이템"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave HomePage');
  }

  itemClicked(item) {
    alert(item.name);

    // let toast = this.toastCtrl.create({
    //   message: item.name,
    //   duration: 3000,
    //   position: 'bottom'
    // });
    //
    // toast.present();

  }

  buttonClicked(event) {
    // alert(event.target.textContent + " " + event.currentTarget.value);
    // bind 페이지 호출
    this.navCtrl.push('BindPage', {value:event.currentTarget.value});

    console.log(event.clientX + " " + event.clientY);
  }
}
