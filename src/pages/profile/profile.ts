import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportPage } from '../report/report';
@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  report=ReportPage
  constructor(public navCtrl: NavController) {

  }

}
