import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';

import { Item } from '../../models/item';

import { Items } from '../../providers/providers';
import { LoadingController } from 'ionic-angular';
import { MainPage } from '../../pages/pages';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items,public loadingCtrl: LoadingController) { }

 
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

 
  openItem(item: Item) {
    let loader = this.loadingCtrl.create({
      content: "Getting all your TOONS ready...",
      duration: 8000
    });
    loader.present();
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  openTab(){
    this.navCtrl.push(MainPage);
  }

}
