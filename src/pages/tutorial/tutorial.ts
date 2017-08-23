import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { LoadingController } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';



export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(private headerColor: HeaderColor,public navCtrl: NavController, public menu: MenuController,public loadingCtrl: LoadingController) {
    this.headerColor.tint('#D50000');
        this.slides = [
          {
            title: "Welcome to our new world of old cartoons",
            description:" <b>Feeling Bored!</b> Re-Live your joyfull Past like  PRO...",
            image: 'http://www.acheartigos.com.br/files/os-simpsons-45.jpg',
          },
          {
            title: "How to Use this Fun app?",
            description: "Just Select your favourite cartoon and VOILA! <b> Enjoy Watching It </b>",

            image: 'http://www.evoketw.com/wp-content/uploads/2014/11/153-200x200.jpg',
          }
         
        ];
      
  }

  startApp() {
    this.navCtrl.setRoot(MainPage, {}, {
      animate: true,
      direction: 'forward'
    });
     let loader = this.loadingCtrl.create({
      content: "Getting all your TOONS ready...",
      duration: 1000
    });
    loader.present();
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
   
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    
    this.menu.enable(true);
  }

}
