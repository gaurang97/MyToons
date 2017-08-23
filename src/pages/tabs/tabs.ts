import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tab1Root } from '../pages';

import { Tab3Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab3Root: any = Tab3Root;
 

  tab1Title = " ";
  tab3Title = " ";
 

  constructor(public navCtrl: NavController) {
 
      this.tab1Title = 'All Videos'
      this.tab3Title = 'About'
     
    
  }
}
