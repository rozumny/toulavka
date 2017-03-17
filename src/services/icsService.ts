import { Injectable } from "@angular/core";

@Injectable()
export class IcsService {

    constructor() {

    }

    getAll() {
        return [
            {
                lat: 49.4141636,
                lng: 14.6578281,
                type: 5,
                title: {
                    en: "",
                    cs: "Infocentrum Město Tábor"
                }
            },
            {
                lat: 49.4062019,
                lng: 14.8110406,
                type: 5,
                title: {
                    en: "",
                    cs: "Město Chýnov"
                }
            },
            {
                lat: 49.3521411,
                lng: 14.7043011,
                type: 5,
                title: {
                    en: "",
                    cs: "TIC Planá nad Lužnicí"
                }
            },
            {
                lat: 49.6172272,
                lng: 14.3883475,
                type: 5,
                title: {
                    en: "",
                    cs: "IC Vysoký Chlumec"
                }
            },
            {
                lat: 49.6581622,
                lng: 14.4247197,
                type: 5,
                title: {
                    en: "",
                    cs: "RIS Sedlčany"
                }
            },
            {
                lat: 49.5780347,
                lng: 14.5406800,
                type: 5,
                title: {
                    en: "",
                    cs: "IC Sedlec-Prčice"
                }
            },
            {
                lat: 49.6385067,
                lng: 14.6416417,
                type: 5,
                title: {
                    en: "",
                    cs: "TIC Votice"
                }
            },
            {
                lat: 49.5324783,
                lng: 14.8094225,
                type: 5,
                title: {
                    en: "",
                    cs: "TIC Mladá Vožice"
                }
            },
            {
                lat: 49.2945022,
                lng: 14.4676531,
                type: 5,
                title: {
                    en: "",
                    cs: "Městské informační centrum Bechyně"
                }
            },
            {
                lat: 49.4501931,
                lng: 14.3599892,
                type: 5,
                title: {
                    en: "",
                    cs: "IC Milevsko"
                }
            },
            {
                lat: 49.2592967,
                lng: 14.7209972,
                type: 5,
                title: {
                    en: "",
                    cs: "IS Soběslav"
                },
            }
        ];
    }
}