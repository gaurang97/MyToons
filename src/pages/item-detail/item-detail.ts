import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { AdMobPro } from '@ionic-native/admob-pro';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item:any;
 currentItems: Item[];
  duration: number;
  video:Item[];

  videos: any;
  admobId: any;
  position:any;

  constructor(private AdMob: AdMobPro, private platform: Platform, public youtube : YoutubeVideoPlayer, public navCtrl: NavController, navParams: NavParams, public items: Items) {
    
       this.currentItems = this.items.query();
    
    this.item = navParams.get('item') || items.defaultItem;
    
  
    
   
        
            this.admobId = {
                banner: 'ca-app-pub-xxxxxxxxxxxxxxxxxxxxxxxxxxx',
                interstitial: 'ca-app-pub-xxxxxxxxxxxxxxxxxxxxxxxxxxx'
            };
       
        
    
 
    
        this.platform.ready().then(() => {
            if(AdMob) {
                AdMob.createBanner({
                    adId: this.admobId.banner,
                    autoShow: false,
                    isTesting: false
                });
            }
        });
   
 
   
        this.platform.ready().then(() => {
            if(AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true,
                    isTesting: false
                });
            }
        });
   
 

        this.platform.ready().then(() => {
            if(AdMob) {
               
                AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
            }
        });
    
 
   
 

 
  }
  
ionViewDidLoad() {
  this.AdMob.onAdDismiss()
    .subscribe(() => { console.log('User dismissed ad'); });
}

  openItem(videos ) {

    this.youtube.openVideo(videos); 
    
  }
 

  
}
