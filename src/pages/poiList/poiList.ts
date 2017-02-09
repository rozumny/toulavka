import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoiDetailPage } from '../poiDetail/poiDetail';
import { PointService } from '../../services/pointService';
// import { TranslateService } from 'ng2-translate/ng2-translate';
import { LocalStorageService } from '../../services/localStorageService';

@Component({
  templateUrl: 'poiList.html'
})
export class PoiList {
  language: string;
  places: any[];

  constructor(private navCtrl: NavController,
    private pointService: PointService,
    private localStorageService: LocalStorageService) {
    this.places = this.pointService.getPoints();
    this.localStorageService.get("lang").then(lang => {
      this.language = lang;
    });
  }

  navigate(place: any) {
    this.navCtrl.push(PoiDetailPage, place);
  }
}
