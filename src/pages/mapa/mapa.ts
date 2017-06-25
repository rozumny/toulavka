import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoiDetailPage } from '../poiDetail/poiDetail';
import { IcDetailPage } from '../icDetail/icDetail';
import { MemoryStorageService } from '../../services/memoryStorageService';
import { PointService } from '../../services/pointService';
import { IcsService } from '../../services/icsService';
// import { TranslateService } from 'ng2-translate/ng2-translate';

declare var SMap: any;
declare var JAK: any;
declare var Loader: any;

declare var google: any;
declare var window: any;

@Component({
  templateUrl: 'mapa.html'
})
export class MapaPage {

  places: any[];
  ics: any[];

  constructor(private navCtrl: NavController,
    private memoryStorageService: MemoryStorageService,
    private icService: IcsService,
    private pointService: PointService) {
    this.places = this.pointService.getPoints();
    this.ics = this.icService.getAll();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadGoogleMaps();
    }, 500);
  }

  loadGoogleMaps() {
    if (!this.memoryStorageService.mapLoaded) {
      window.mapInit = () => {
        this.drawGoogleMap();
      }

      var script = document.createElement("script");
      script.id = "googleMaps";
      script.src = 'http://maps.google.com/maps/api/js?key=AIzaSyB7nQfPucL6mdQC-UG78yv3_VFMaJlCIZU&callback=mapInit';
      // script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';

      document.body.appendChild(script);
      this.memoryStorageService.mapLoaded = true;
    } else {
      this.drawGoogleMap();
    }
  }

  treasureColor(place) {
    return place.hasTreasure != undefined && place.hasTreasure ? '111' : 'white';
  }

  getColor(type: number) {
    switch (type) {
      case 1:
        return "e42521";
      case 2:
        return "5d5700";
      case 3:
        return "87004e";
      case 4:
        return "72939b";
    }
  }

  drawGoogleMap() {
    var mapDiv = document.getElementById('map2');
    var map = new google.maps.Map(mapDiv, {
      center: { lat: 49.5087075, lng: 14.5047603 },
      scrollwheel: false,
      zoom: 9,
      disableDefaultUI: true
    });

    var i = 1;
    this.ics.forEach(ic => {
      var image = 'data:image/svg+xml,       %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%220%200%20%2040%2040%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22' + '111111' + '%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2217%22%20fill%3D%22%23' + '009933' + '%22%2F%3E%0A%20%20%20%20%3Ctext%20transform%3D%22translate(20%2027)%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2218%22%20text-anchor%3D%22middle%22%3E' + 'IC' + '%3C%2Ftext%3E%0A%3C%2Fsvg%3E';;

      var marker = new google.maps.Marker({
        position: { lat: ic.lat, lng: ic.lng },
        map: map,
        icon: image
      });

      var a = i;

      marker.addListener('click', () => {
        this.navCtrl.push(IcDetailPage, this.ics[a - 1]);
      });

      i++;
    });

    this.places.forEach(place => {
      var image = 'data:image/svg+xml,       %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2240px%22%20height%3D%2240px%22%20viewBox%3D%220%200%20%2040%2040%22%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22' + this.treasureColor(place) + '%22%20%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2217%22%20fill%3D%22%23' + this.getColor(place.type) + '%22%2F%3E%0A%20%20%20%20%3Ctext%20transform%3D%22translate(20%2027)%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2218%22%20text-anchor%3D%22middle%22%3E' + place.number + '%3C%2Ftext%3E%0A%3C%2Fsvg%3E';

      var marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map,
        optimized: false,
        zIndex: place.number == "4" ? 99 : 1,
        icon: image
      });

      marker.addListener('click', () => {
        this.navCtrl.push(PoiDetailPage, place);
      });
    });

  }
}
