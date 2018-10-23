import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Team} from '../Class'
import arrTeam from '../home/arry'

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  // hide =true;
  scoreA = 0;
  scoreB = 0;
  try= 3;
  penalty = 7;
  conversion = 5;
  team;

  TEAM1 = arrTeam[0].team1;
  TEAM2 =arrTeam[0].team2;

  arrT = arrTeam;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }


 
  presentAlert() {
    let alert = this.alertCtrl.create({
      // title: 'Su',
      subTitle: 'Enter the value below to subtract',
      inputs:[{
        name: 'value',
        placeholder: 'Enter value',
      },
    ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Subtract',
        handler: data => {
          this.cal(data.value);
          // this.show = false;
        },
      }],
    });

    alert.present();
  }

  calTry(){
    if(this.team==1){
    this.scoreA = this.scoreA + this.try;
  } else{
  this.scoreB = this.scoreB+ this.try;
  };
  }
  calPen(){
    if(this.team==1){
      this.scoreA = this.scoreA + this.penalty;
    } else{
    this.scoreB = this.scoreB+ this.penalty;
    };
  };
  calCon(){
    if(this.team==1){
      this.scoreA = this.scoreA + this.conversion;
    } else{
    this.scoreB = this.scoreB+ this.conversion;
    };
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

  selectTeam(i){
    this.team = i;
    // this.show = true;
  }

  clear(){
    this.arrT.splice(0);
    this.navCtrl.push(HomePage)
  }

  cal(scr)
  {
    if(this.team==1){
      this.scoreA -= scr;
    } else{
    this.scoreB -= scr;
    };


   
  }
 
}
