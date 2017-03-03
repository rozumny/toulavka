import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { LocalStorageService } from '../../services/localStorageService';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: './home.html'
})
export class HomePage {

  places;

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    public menu: MenuController,
    private localStorageService: LocalStorageService) {
  }

  openMap() {
    this.navCtrl.push(MapaPage);
  }

  setLanguage(language: string) {
    this.localStorageService.set("lang", language);
    this.translate.use(language);
  }

  openMenu() {
    if (!this.menu.isOpen())
      this.menu.open();
    else
      this.menu.close();
  }
}
