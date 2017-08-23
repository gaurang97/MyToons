import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

import { ListMasterPage } from '../pages/list-master/list-master';

import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';


import { User } from '../providers/user';

import { AppRate } from '@ionic-native/app-rate';

import { HeaderColor } from '@ionic-native/header-color';
 import { AdMobPro } from '@ionic-native/admob-pro';




import { SplashScreen } from '@ionic-native/splash-screen';


import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';




export function provideSettings(storage: Storage) {}
@NgModule({
declarations: [
MyApp,
ItemCreatePage,
ItemDetailPage,
 ListMasterPage,

SearchPage,
SettingsPage,
TabsPage,
TutorialPage],imports: [
    BrowserModule,
    HttpModule,
   IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
    
    SearchPage,
    SettingsPage,
     TabsPage,
    TutorialPage,],
  providers: [
    Api,
    Items,
    User,
  
    SplashScreen,
    
  
    SocialSharing,
     
    HeaderColor,
      AppRate ,
     
     YoutubeVideoPlayer,
     AdMobPro,
    StatusBar,
   LocalNotifications,
 
   
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
 { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
