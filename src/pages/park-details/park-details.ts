import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Dialogs } from '@ionic-native/dialogs';
/**
 * Generated class for the ParkDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-details',
  templateUrl: 'park-details.html',
})
export class ParkDetailsPage {
  parkInfo: FirebaseListObservable<any[]>;
  parkName: Object;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase, public dialogs: Dialogs) {
                 
    this.parkInfo = navParams.data.parkData;
    this.parkInfo =af.list('/korea');
    console.log(this.parkInfo);
  }

  addItem() {
    this.dialogs.prompt('Add a task', 'New space', ['Ok', 'Cancel'], '').then(
      theResult =>{
        if((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
          this.parkInfo.push({title: theResult.input1, loc: ''});
        }
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailsPage');
  }



}
