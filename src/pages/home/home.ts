import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { LocalStorageService } from '../../services/localStorageService';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
  templateUrl: './home.html'
})
export class HomePage {

  places;

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private localStorageService: LocalStorageService) {
  }

  openMap() {
    this.navCtrl.push(MapaPage);
  }

  setLanguage(language: string) {
    this.localStorageService.set("lang", language);
    this.translate.use(language);
  }
}
