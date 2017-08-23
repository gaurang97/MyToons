import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Items } from '../../providers/providers';
import { LoadingController, AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { Item } from '../../models/item';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HeaderColor } from '@ionic-native/header-color';

 

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
   notifyTime: any;
    notifications: any[] = [];
    days: any[];
    chosenHours: number;
    chosenMinutes: number;
     firstNotificationTime:any;

  constructor( private headerColor: HeaderColor,public navCtrl: NavController, public items: Items, public modalCtrl: ModalController,public loadingCtrl: LoadingController,public localNotifications: LocalNotifications, private platform: Platform,public alertCtrl: AlertController) {
    this.currentItems = this.items.query();
    this.headerColor.tint('#D50000');
  
   


           
            this.localNotifications.schedule({
                id: 1,
                icon: "resources/android/icon/drawable-ldpi-icon.png",
                title: 'Getting Bored!',
                text: 'Your toons are waiting for you :)',
                at: new Date(new Date().getTime() + 10800 * 1000),
              
                sound:   'file://isnt-it.mp3',
            });
 
      
   
 
    
 
        
 
    
    }
  
    
  
    
 
    
 
   
 

 
  ionViewDidLoad() {
  }
deleteItem(item) {
    this.items.delete(item);}
openItem(item: Item) {

    this.navCtrl.push(ItemDetailPage, {
      item: item
    }
    ); 
    let loader = this.loadingCtrl.create({
      content: "Getting all your TOONS ready...",
      duration: 2000
    });
    loader.present();
  }
  openFbpage(){
    this.navCtrl.push(ItemCreatePage)
  }
   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2500);
    
  }
   openSearch() {
   this.navCtrl.push(SearchPage);
  }


}



  
