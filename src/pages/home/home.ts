import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
  }

}
