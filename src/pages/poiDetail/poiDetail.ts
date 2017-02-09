import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { TranslateService } from 'ng2-translate/ng2-translate';
import { LocalStorageService } from '../../services/localStorageService';

@Component({
  templateUrl: 'poiDetail.html'
})
export class PoiDetailPage {
  poi: any;
  language: string;
  isHeight: boolean;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private localStorageService: LocalStorageService) {
    this.poi = navParams.data;
    this.isHeight = false;
    this.localStorageService.get("lang").then(lang => {
      this.language = lang;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      var scrollHeight = document.getElementById("scrollId").offsetHeight;
      var innerHeight = document.getElementById("innerId").offsetHeight;
      this.isHeight = scrollHeight > (innerHeight + 30);
    }, 100);
  }
}
