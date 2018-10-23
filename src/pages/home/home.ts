import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoardPage } from '../board/board';
import {Team} from '../Class'
import arrTeam from '../home/arry'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  team1:string;
  team2:string;

  constructor(public navCtrl: NavController) {

  }
  // pushh(){
  //   this.navCtrl.push(BoardPage);
  // }
  addTam(team1,team2){
    if(team1 === team2 || team2 === team1){
      alert('the TEAMnames can\'t be the same');
      
    }
    else{
      let obj = new Team(team1,team2);
  arrTeam[0] = obj;
    //arrTeam.push(obj)
    this.navCtrl.push(BoardPage);
    };
  }
}
