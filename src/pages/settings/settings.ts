import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams,AlertController,ActionSheetController  } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';



import { Settings } from '../../providers/settings';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    private appRate: AppRate,
    private alertCtrl: AlertController,
   
    public actionSheetCtrl: ActionSheetController
    

    ) {
      let icon;
      icon="https://cdn.shopify.com/s/files/1/1009/9676/collections/mickey_circle_large.png?v=1459899495";
    
  }
ionViewDidLoad() {}

rate(){
 this.appRate.preferences.storeAppURL = {

  android: 'market://details?id=com.mytoon.myapp',
 
};

this.appRate.promptForRating(true);}

share(){
   this.socialSharing.share("MyToons A fun App destination for kids.", null, "www/assets/img/gaurang.jpg", "https://www.google.com"); 
}
  disclaimer() {
 
  let alert = this.alertCtrl.create({
    title: 'Disclaimer',
    subTitle: 'This app uses the Youtube API to show the content of different youtube video channels without any misuse of there data. This API allows to show the videos on there channel itself, which ensures no hurt to Intellectual Property ',
    buttons: ['Great']
  });
  alert.present();
}

openSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'App Designed By - Gaurang Dadheech',
     
     buttons: [
       {
         text: 'Share via Whatsapp',
         
         handler: () => {
         
          this.socialSharing.shareViaWhatsApp("MyToons A fun App destination for kids." , null, "https://play.google.com/store/apps/developer?id=com.mytoon.myapp"); 
         }
       },
         {
         text: 'Share via Facebook',
         
         handler: () => {
           let icon;
           icon="assets/img/toons.png"
          this.socialSharing.shareViaFacebook("MyToons A fun App destination for kids.  www.google.com",null, "https://play.google.com/store/apps/developer?id=com.mytoon.myapp"); 
         }
       },
       {
         text: 'Disclaimer',
         handler: () => {
             let alert = this.alertCtrl.create({
    title: 'Disclaimer',
    subTitle: 'This app uses the Youtube API to show the content of different youtube video channels without any misuse of there data. This API allows to show the videos on there channel itself, which ensures no hurt to Intellectual Property ',
    buttons: ['Great']
  });
  alert.present();
         }
       },
        
{
         text: 'Rate Us',
        
         handler: () => {
           this.appRate.preferences.storeAppURL = {

  android: 'market://details?id=com.mytoon.myapp',
 
};

this.appRate.promptForRating(true);}
       },
       {
         text: 'Cancel',
         role: 'cancel',
       
       }
     ]
   });

   actionSheet.present();
 }

}
