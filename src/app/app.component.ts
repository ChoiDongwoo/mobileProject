import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ParkData } from '../providers/park-data';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html',
  providers: [ ParkData ]
})


export class MyApp {
  rootPage:any='LoginPage';


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public parkData: ParkData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    parkData.load();

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        this.rootPage = 'LoginPage';
        unsubscribe();

    });
  }
}

