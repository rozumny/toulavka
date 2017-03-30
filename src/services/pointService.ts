import { Injectable } from "@angular/core";

@Injectable()
export class PointService {

  constructor() {

  }

  getPoints() {
    return [
      {
        lat: 49.2947142,
        lng: 14.4690286,
        type: 1,
        title: {
          en: "",
          cs: "Turistické informační centrum, Bechyně"
        },
        number: "1",
        description: {
          en: "",
          cs: "Malé občerstvení zdarma ke komentovaným prohlídkám zámku, kláštera, okruhům a výletům (platí při min. účasti 5 plně platících osob, v případě zámku 10 osob)."
        },
        images: [
          "1.jpg"
        ],
        address: {
          en: "",
          cs: "Nám. T. G. M. 5, Bechyně"
        },
        tel: {
          en: "",
          cs: "602 843 442"
        },
        link: {
          en: "",
          cs: "www.visitbechyne.cz"
        },
        email: {
          en: "",
          cs: "touristinformationbechyne@gmail.com"
        }
      },
      {
        lat: 49.4113672,
        lng: 14.6554125,
        type: 1,
        title: {
          en: "",
          cs: "Bechyňská brána a věž Kotnov, Tábor"
        },
        number: "2",
        description: {
          en: "",
          cs: "Sleva 10 Kč ze základního a sníženého vstupného, případně sleva 30 Kč z rodinné vstupenky (platí pro společnou vstupenku do expozice Život ve středověku a na věž Kotnov)."
        },
        address: {
          en: "",
          cs: "Klokotská, Tábor"
        },
        tel: {
          en: "",
          cs: "381 252 788"
        },
        link: {
          en: "",
          cs: "www.husitskemuzeum.cz"
        },
        email: {
          en: "",
          cs: "tabor@husitskemuzeum.cz"
        },
        images: [
          "2.jpg"
        ]
      },
      {
        lat: 49.4139336,
        lng: 14.6577261,
        type: 1,
        title: {
          en: "",
          cs: "Husitské muzeum v Táboře"
        },
        number: "3",
        description: {
          en: "",
          cs: "Sleva 20 Kč ze základního a sníženého vstupného, sleva 30 Kč z rodinného vstupného (platí jen pro společnou vstupenku do expozice Husité, podzemí a gotického sálu)."
        },
        address: {
          en: "",
          cs: "Žižkovo náměstí 1, Tábor"
        },
        tel: {
          en: "",
          cs: "381 254 286"
        },
        link: {
          en: "",
          cs: "www.husitskemuzeum.cz"
        },
        email: {
          en: "",
          cs: "tabor@husitskemuzeum.cz"
        },
        images: [
          "3.jpg"
        ]
      },
      {
        lat: 49.4563411,
        lng: 14.3680847,
        type: 1,
        title: {
          en: "",
          cs: "Klášter Milevsko"
        },
        number: "4",
        description: {
          en: "",
          cs: "Sleva 20 % ze vstupného na prohlídku pro držitele karty."
        },
        address: {
          en: "",
          cs: "U Bažantnice 556, Milevsko"
        },
        tel: {
          en: "",
          cs: "606 201 780"
        },
        link: {
          en: "",
          cs: "www.klastermilevsko.cz"
        },
        email: {
          en: "",
          cs: "prohlidky@klastermilevsko.cz"
        },
        images: [
          "4.jpg"
        ]
      },
      {
        lat: 49.3898372,
        lng: 14.7229983,
        type: 1,
        title: {
          en: "",
          cs: "Kozí hrádek"
        },
        number: "5",
        description: {
          en: "",
          cs: "Při zakoupení jedné vstupenky na Kozí hrádek druhá vstupenka zdarma."
        },
        address: {
          en: "",
          cs: "Kozí hrádek, Sezimovo Ústí"
        },
        tel: {
          en: "",
          cs: "381 276 707"
        },
        tel2: {
          en: "",
          cs: "737 254 684"
        },
        link: {
          en: "",
          cs: "www.kultura.sezimovo-usti.cz"
        },
        email: {
          en: "",
          cs: "mexus@sezimovo-usti.cz"
        },
        images: [
          "5.jpg"
        ]
      },
      {
        lat: 49.4140689,
        lng: 14.6578325,
        type: 1,
        hasTreasure: true,
        title: {
          en: "",
          cs: "Město Tábor"
        },
        number: "6",
        description: {
          en: "",
          cs: "Vstup do Galerie U Radnice zdarma po předložení platné vstupenky z expozice Táborský poklad (expozice ukončena 30. září 2017). 50% sleva na zhotovení fotografické pohlednice (15 x 20 cm) v Infocentru Město Tábor."
        },
        address: {
          en: "",
          cs: "Infocentrum Město Tábor, Žižkovo náměstí 2, Tábor"
        },
        tel: {
          en: "",
          cs: "381 486 230"
        },
        link: {
          en: "",
          cs: "www.visittabor.eu"
        },
        email: {
          en: "",
          cs: "infocentrum@mutabor.cz"
        },
        images: [
          "6.jpg"
        ]
      },
      {
        lat: 49.4559097,
        lng: 14.3682642,
        type: 1,
        title: {
          en: "",
          cs: "Milevské muzeum"
        },
        number: "7",
        description: {
          en: "",
          cs: "Možnost detailní prohlídky vybraných sbírkových předmětů (zbraně a ruční granáty)."
        },
        address: {
          en: "",
          cs: "Klášterní 557 (II. nádvoří kláštera), Milevsko"
        },
        tel: {
          en: "",
          cs: "382 521 093"
        },
        link: {
          en: "",
          cs: "www.muzeumvmilevsku.cz"
        },
        email: {
          en: "",
          cs: "muzeum.milevsko@muzeumvmilevsku.cz"
        },
        images: [
          "7.jpg"
        ]
      },
      {
        lat: 49.4508181,
        lng: 14.4469272,
        type: 1,
        title: {
          en: "",
          cs: "Muzeum pekařství a mlynářství Božetice"
        },
        number: "8",
        description: {
          en: "",
          cs: "Muzeum pekařství a mlynářství Božetice<br/><br/>Sleva 20 % ze vstupného."
        },
        address: {
          en: "",
          cs: "Božetice 24, Milevsko"
        },
        tel: {
          en: "",
          cs: "777 197 336"
        },
        tel2: {
          en: "",
          cs: "777 197 331"
        },
        link: {
          en: "",
          cs: "www.muzeumbozetice.cz"
        },
        email: {
          en: "",
          cs: "info@muzeumbozetice.cz"
        },
        images: [
          "8.jpg"
        ]
      },
      {
        lat: 49.3833161,
        lng: 14.6821481,
        type: 1,
        title: {
          en: "",
          cs: "Památník dr. E. Beneše v Sez. Ústí"
        },
        number: "9",
        description: {
          en: "",
          cs: "Sleva 20 Kč ze základního a rodinného vstupného do Památníku dr. Edvarda Beneše v Sezimově Ústí."
        },
        address: {
          en: "",
          cs: "Dr. Edvarda Beneše 1138, Sezimovo Ústí"
        },
        tel: {
          en: "",
          cs: "381 261 674"
        },
        tel2: {
          en: "",
          cs: "381 254 286"
        },
        link: {
          en: "",
          cs: "www.husitskemuzeum.cz"
        },
        email: {
          en: "",
          cs: "tabor@husitskemuzeum.cz"
        },
        images: [
          "9.jpg"
        ]
      },
      {
        lat: 49.2588392,
        lng: 14.7209836,
        type: 1,
        title: {
          en: "",
          cs: "Rožmberský dům v Soběslavi"
        },
        number: "10",
        description: {
          en: "",
          cs: "Sleva 20 Kč ze základního a rodinného vstupného. Sleva 10 Kč ze sníženého vstupného."
        },
        address: {
          en: "",
          cs: "Petra Voka 152/I, Soběslav"
        },
        tel: {
          en: "",
          cs: "381 523 421"
        },
        link: {
          en: "",
          cs: "www.blatskemuzeum.cz"
        },
        email: {
          en: "",
          cs: "likarova@husitskemuzeum.cz"
        },
        images: [
          "10.jpg"
        ]
      },
      {
        lat: 49.6216656,
        lng: 14.3862325,
        type: 1,
        title: {
          en: "",
          cs: "Skanzen Vysoký Chlumec"
        },
        number: "11",
        description: {
          en: "",
          cs: "Při zakoupení jedné plnohodnotné vstupenky druhá vstupenka do skanzenu zdarma."
        },
        address: {
          en: "",
          cs: "Skanzen Vysoký Chlumec"
        },
        tel: {
          en: "",
          cs: "733 371 546"
        },
        tel2: {
          en: "",
          cs: "318 633 138"
        },
        link: {
          en: "",
          cs: "www.muzeum-pribram.cz"
        },
        email: {
          en: "",
          cs: "info@muzeum-pribram.cz"
        },
        images: [
          "11.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.2943061,
        lng: 14.4676853,
        type: 1,
        title: {
          en: "",
          cs: "Městské muzeum Bechyně"
        },
        number: "16",
        description: {
          en: "",
          cs: "K zakoupené vstupence zdarma keramický suvenýr z Bechyně - města keramiky."
        },
        address: {
          en: "",
          cs: "Náměstí T. G. M. 140, Bechyně"
        },
        tel: {
          en: "",
          cs: "778 545 509"
        },
        link: {
          en: "",
          cs: "www.kulturnidum.cz"
        },
        email: {
          en: "",
          cs: "infocentrum@kulturnidum.cz"
        },
        images: [
          "16.jpg"
        ]
      },
      {
        lat: 49.2601967,
        lng: 14.7202183,
        type: 1,
        title: {
          en: "",
          cs: "Smrčkův dům v Soběslavi"
        },
        number: "22",
        description: {
          en: "",
          cs: "Sleva 20 Kč ze základního a rodinného vstupného, sleva 10 Kč ze sníženého vstupného."
        },
        address: {
          en: "",
          cs: "Nám. Republiky 107, Soběslav"
        },
        tel: {
          en: "",
          cs: "381 524 853"
        },
        link: {
          en: "",
          cs: "www.blatskemuzeum.cz"
        },
        email: {
          en: "",
          cs: "likarova@husitskemuzeum.cz"
        },
        images: [
          "22.jpg"
        ]
      },
      {
        lat: 49.4143350,
        lng: 14.6453392,
        type: 1,
        title: {
          en: "",
          cs: "Klášter Klokoty"
        },
        number: "33",
        description: {
          en: "",
          cs: "Při nákupu v poutních suvenýrech nad 300 Kč pohled nebo záložka zdarma."
        },
        address: {
          en: "",
          cs: "Staroklokotská 1, Tábor"
        },
        tel: {
          en: "",
          cs: "730 572 937"
        },
        link: {
          en: "",
          cs: "www.klokoty.cz"
        },
        email: {
          en: "",
          cs: "klokotypoutni@centrum.cz"
        },
        images: [
          "33.jpg"
        ]
      },
      {
        lat: 49.6369064,
        lng: 14.6407019,
        type: 1,
        title: {
          en: "",
          cs: "Klášter Votice"
        },
        number: "37",
        description: {
          en: "",
          cs: "1x turistická vizitka ke 2 prodaným vstupenkám nebo k rodinné vstupence do kláštera."
        },
        address: {
          en: "",
          cs: "Klášterní 1, Votice"
        },
        tel: {
          en: "",
          cs: "775 683 394"
        },
        tel2: {
          en: "",
          cs: "317 812 505"
        },
        link: {
          en: "",
          cs: "www.mesto-votice.cz"
        },
        email: {
          en: "",
          cs: "klaster@votice.cz"
        },
        images: [
          "37.jpg"
        ]
      },
      {
        lat: 49.3051558,
        lng: 14.7880792,
        type: 1,
        title: {
          en: "",
          cs: "Zámek Brandlín"
        },
        number: "55",
        description: {
          en: "",
          cs: "Zámecká prohlídka zdarma."
        },
        address: {
          en: "",
          cs: "Brandlín 1, Tučapy"
        },
        tel: {
          en: "",
          cs: "608 131 315"
        },
        link: {
          en: "",
          cs: "www.zamekbrandlin.cz"
        },
        email: {
          en: "",
          cs: "zamekbrandlin@seznam.cz"
        },
        images: [
          "55.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.4145342,
        lng: 14.6681717,
        type: 2,
        title: {
          en: "",
          cs: "Botanická zahrada v Táboře "
        },
        number: "12",
        description: {
          en: "",
          cs: "K jedné zakoupené dospělé vstupence 3 děti do 15 let zdarma."
        },
        address: {
          en: "",
          cs: "Nám. T. G. Masaryka 788, Tábor"
        },
        tel: {
          en: "",
          cs: "774 128 073"
        },
        link: {
          en: "",
          cs: "szestabor.cz/botanicka"
        },
        email: {
          en: "",
          cs: "botgarden@seznam.cz"
        },
        images: [
          "12.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5745953,
        lng: 14.2815233,
        type: 2,
        title: {
          en: "",
          cs: "Farma Čapí letka, Mokřice"
        },
        number: "13",
        description: {
          en: "",
          cs: "Sleva 10 % na mléčné výrobky z kravského i kozího mléka. Sleva 50 % na nákup v sýrárně pro hosty ubytované na farmě. Při prohlídkách ochutnávka produktů zdarma."
        },
        address: {
          en: "",
          cs: "Mokřice 7, Krásná Hora nad Vltavou"
        },
        tel: {
          en: "",
          cs: "603 817 828"
        },
        tel2: {
          en: "",
          cs: "318 862 444"
        },
        link: {
          en: "",
          cs: "www.capiletka.cz"
        },
        email: {
          en: "",
          cs: "capiletka@seznam.cz"
        },
        images: [
          "13.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.4152569,
        lng: 14.6544031,
        type: 2,
        title: {
          en: "",
          cs: "Housův mlýn a filmová zbrojnice,Tábor"
        },
        number: "14",
        description: {
          en: "",
          cs: "Sleva 20 % ze základní ceny vstupného do filmové zbrojnice. Při ubytování v hostelu vstup do zbrojnice zdarma."
        },
        address: {
          en: "",
          cs: "Pod Holečkovými sady 383, Tábor"
        },
        tel: {
          en: "",
          cs: "775 630 665"
        },
        link: {
          en: "",
          cs: "www.housuvmlyn.cz"
        },
        email: {
          en: "",
          cs: "info@housuvmlyn.cz"
        },
        images: [
          "14.jpg"
        ]
      },
      {
        lat: 49.5470328,
        lng: 14.7958675,
        type: 2,
        title: {
          en: "",
          cs: "Dvořák-Doprava-ServisaPenzionuJaromíra,MladáVožice"
        },
        number: "15",
        description: {
          en: "",
          cs: "5% sleva na autobusovou dopravu. Ke každé noci v penzionu 1 láhev piva nebo nealko nápoje na osobu zdarma."
        },
        description2: {
          en: "",
          cs: "Autobusy: Noskov 27"
        },
        address: {
          en: "",
          cs: "Penzion: Náměstí obětí nacismu 19, Mladá Vožice"
        },
        link: {
          en: "",
          cs: "www.autobusy-dvorak.cz"
        },
        email: {
          en: "",
          cs: "dvorak.noskov@seznam.cz"
        },
        images: [
          "15.jpg"
        ]
      },
      {
        lat: 49.4150514,
        lng: 14.6594133,
        type: 2,
        title: {
          en: "",
          cs: "Muzeum LEGA Tábor"
        },
        number: "17",
        description: {
          en: "",
          cs: "10% sleva na rodinné vstupné.<br/> 15% sleva na vstupné pro jednotlivce."
        },
        address: {
          en: "",
          cs: "Špitálské náměstí 275, Tábor"
        },
        tel: {
          en: "",
          cs: "602 697 207"
        },
        link: {
          en: "",
          cs: "www.muzeumlegatabor.cz"
        },
        email: {
          en: "",
          cs: "info@muzeumlegatabor.cz"
        },
        images: [
          "17.jpg"
        ]
      },
      {
        lat: 49.4129000,
        lng: 14.6581194,
        type: 2,
        title: {
          en: "",
          cs: "Muzeum čokolády a marcipánu Tábor"
        },
        number: "18",
        description: {
          en: "",
          cs: "10% sleva na vstupenku pro rodinu.<br/> 20% sleva pro jednotlivce."
        },
        address: {
          en: "",
          cs: "Kotnovská 138, Tábor"
        },
        tel: {
          en: "",
          cs: "381 211 784"
        },
        link: {
          en: "",
          cs: "www.cokomuzeum.cz"
        },
        email: {
          en: "",
          cs: "recepce@cokomuzeum.cz"
        },
        images: [
          "18.jpg"
        ]
      },
      {
        lat: 49.6145886,
        lng: 14.3917272,
        type: 2,
        title: {
          en: "",
          cs: "Pivovar Vysoký Chlumec"
        },
        number: "19",
        description: {
          en: "",
          cs: "Při zakoupení exkurze s kartou Toulavka ochutnávka piva zdarma."
        },
        address: {
          en: "",
          cs: "Vysoký Chlumec 29"
        },
        tel: {
          en: "",
          cs: "318 401 311"
        },
        link: {
          en: "",
          cs: "www.pivovar-vysokychlumec.cz"
        },
        email: {
          en: "",
          cs: "info@pivovar-vysokychlumec.cz"
        },
        images: [
          "19.jpg"
        ]
      },
      {
        lat: 49.5715925,
        lng: 14.7697933,
        type: 2,
        title: {
          en: "",
          cs: "Rozhledna Kovářka, Moraveč"
        },
        number: "20",
        description: {
          en: "",
          cs: "Ke vstupu do rozhledny a muzea výklad o kovářském řemesle zdarma."
        },
        address: {
          en: "",
          cs: "Moraveč 18, Mladá Vožice"
        },
        tel: {
          en: "",
          cs: "776 849 711"
        },
        link: {
          en: "",
          cs: "www.rozhledna-kovarka.cz"
        },
        email: {
          en: "",
          cs: "info@kovar-dobes.cz"
        },
        images: [
          "20.jpg"
        ]
      },
      {
        lat: 49.6386947,
        lng: 14.6438242,
        type: 2,
        title: {
          en: "",
          cs: "Rozhledna Václavka, Votice"
        },
        number: "21",
        description: {
          en: "",
          cs: "Při zakoupení vstupenky do Václavky dostanete 1x presso s mlékem zdarma v restauraci U Modré kočky (naproti věži)."
        },
        address: {
          en: "",
          cs: "Kostel sv. Václava, Votice"
        },
        tel: {
          en: "",
          cs: "777 770 693"
        },
        tel2: {
          en: "",
          cs: "604 235 359"
        },
        link: {
          en: "",
          cs: "www.votice-ubytovani.cz"
        },
        email: {
          en: "",
          cs: "modrakocka@atlas.cz"
        },
        images: [
          "21.jpg"
        ]
      },
      {
        lat: 49.5586103,
        lng: 14.5277636,
        type: 2,
        title: {
          en: "",
          cs: "Trojovský mlýn pro děti, Uhřice"
        },
        number: "23",
        description: {
          en: "",
          cs: "Ráj pro děti: zahrady a zvířátka, venkovní herny a dílny, koupací jezírko - to vše se slevou 15 % (areál se postupně připravuje)."
        },
        address: {
          en: "",
          cs: "Uhřice 1, Sedlec-Prčice"
        },
        tel: {
          en: "",
          cs: "602 164 740"
        },
        link: {
          en: "",
          cs: "www.trojovskymlyn.cz"
        },
        email: {
          en: "",
          cs: "pavlina@trojovskymlyn.cz"
        },
        images: [
          "23.jpg"
        ]
      },
      {
        lat: 49.5095683,
        lng: 14.3037467,
        type: 2,
        title: {
          en: "",
          cs: "Zážitkový park Zeměráj, Kovářov"
        },
        number: "25",
        description: {
          en: "",
          cs: "Zdarma mapa k cestě s hledáním pokladu. Zdarma výroba hliněného amuletu pro štěstí. Bonusy nejsou kombinovatelné s jinými slevami."
        },
        address: {
          en: "",
          cs: "Kovářov 201"
        },
        tel: {
          en: "",
          cs: "702 542 054"
        },
        link: {
          en: "",
          cs: "www.zemeraj.cz"
        },
        email: {
          en: "",
          cs: "info@zemeraj.cz"
        },
        images: [
          "25.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.4501319,
        lng: 14.3599408,
        type: 2,
        title: {
          en: "",
          cs: "Muzeum milevských maškar"
        },
        number: "30",
        description: {
          en: "",
          cs: "1 bílá maska k dozdobení zdarma."
        },
        address: {
          en: "",
          cs: "Náměstí E. Beneše 6, Milevsko"
        },
        tel: {
          en: "",
          cs: "383 809 016"
        },
        link: {
          en: "",
          cs: "www.milevskem.cz"
        },
        email: {
          en: "",
          cs: "infocentrum@milevskem.cz"
        },
        images: [
          "30.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.6347867,
        lng: 14.6416622,
        type: 2,
        title: {
          en: "",
          cs: "Motýlárium Votice"
        },
        number: "57",
        description: {
          en: "",
          cs: "K jedné kartě Toulavka publikace v hodnotě 50 Kč zdarma."
        },
        address: {
          en: "",
          cs: "Zámecká 810, Votice"
        },
        tel: {
          en: "",
          cs: "603 549 125"
        },
        link: {
          en: "",
          cs: "www.ochranafauny.cz"
        },
        email: {
          en: "",
          cs: "buchalova@ochranafauny.cz"
        },
        images: [
          "57.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.6648764,
        lng: 14.2931047,
        type: 2,
        title: {
          en: "",
          cs: "Centrum ochrany fauny ČR Hrachov"
        },
        number: "58",
        description: {
          en: "",
          cs: "K jedné kartě Toulavka publikace v hodnotě 50 Kč zdarma."
        },
        address: {
          en: "",
          cs: "Hrachov 13, K. Hora n. Vlt."
        },
        tel: {
          en: "",
          cs: "603 549 125"
        },
        link: {
          en: "",
          cs: "www.ochranafauny.cz"
        },
        email: {
          en: "",
          cs: "buchalova@ochranafauny.cz"
        },
        images: [
          "58.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5984683,
        lng: 14.3829044,
        type: 3,
        title: {
          en: "",
          cs: "Adventuregolf Počepice"
        },
        number: "26",
        description: {
          en: "",
          cs: "K zakoupené 1 hodině golfu druhá hodina zdarma."
        },
        address: {
          en: "",
          cs: "Počepice 115, Petrovice"
        },
        tel: {
          en: "",
          cs: "775 724 351"
        },
        link: {
          en: "",
          cs: "www.adventure-golf.cz"
        },
        email: {
          en: "",
          cs: "info@adventure-golf.cz"
        },
        images: [
          "26.jpg"
        ]
      },
      {
        lat: 49.3604517,
        lng: 14.7000706,
        type: 3,
        title: {
          en: "",
          cs: "Adrenalinsport Planá n. L."
        },
        number: "27",
        description: {
          en: "",
          cs: "Při skalním lezení s horským vůdcem UIAGM v přírodě sleva 20 % , zapůjčení potřebného vybavení, doprava do lokalit do 35 km od Tábora a účast dětí do 15 let věku v doprovodu rodiče zdarma."
        },
        address: {
          en: "",
          cs: "ČSLA 405, Planá nad Lužnicí"
        },
        tel: {
          en: "",
          cs: "723 633 428"
        },
        link: {
          en: "",
          cs: "www.adrenalin.cz"
        },
        email: {
          en: "",
          cs: "adrenalin@adrenalin.cz"
        },
        images: [
          "27.jpg"
        ]
      },
      {
        lat: 49.5475103,
        lng: 14.5609656,
        type: 3,
        title: {
          en: "",
          cs: "Rybolov Forest-Fish, Vrchotice"
        },
        number: "28",
        description: {
          en: "",
          cs: "Poskytujeme zdarma zapůjčení rybářského náčiní k lovu na rybníku Velký Vrchotický."
        },
        description2: {
          en: "",
          cs: "Srub u rybníka Velký Vrchotický"
        },
        address: {
          en: "",
          cs: "Vrchotice u Sedlce-Prčice"
        },
        tel: {
          en: "",
          cs: "602 666 994"
        },
        link: {
          en: "",
          cs: "www.forestish.com"
        },
        email: {
          en: "",
          cs: "forest-fish@seznam.cz"
        },
        images: [
          "28.jpg"
        ]
      },
      {
        lat: 49.5268406,
        lng: 14.5203292,
        type: 3,
        title: {
          en: "",
          cs: "Golf Čertovo břemeno"
        },
        number: "29",
        description: {
          en: "",
          cs: "Bezplatný vstup na tréninkové plochy + zdarma zapůjčení golfové hole."
        },
        address: {
          en: "",
          cs: "Alenina Lhota 7, Jistebnice"
        },
        tel: {
          en: "",
          cs: "775 913 338"
        },
        link: {
          en: "",
          cs: "www.cebr.cz"
        },
        email: {
          en: "",
          cs: "recepce@cebr.cz"
        },
        images: [
          "29.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5637486,
        lng: 14.6169878,
        type: 3,
        title: {
          en: "",
          cs: "Paintball Perlot, Nové Dvory"
        },
        number: "31",
        description: {
          en: "",
          cs: "Zdarma zapůjčení oblečení (kombinézy)."
        },
        address: {
          en: "",
          cs: "Nové Dvory 20, Heřmaničky"
        },
        tel: {
          en: "",
          cs: "608 850 608"
        },
        link: {
          en: "",
          cs: "www.perlot.cz"
        },
        email: {
          en: "",
          cs: "info@perlot.cz"
        },
        images: [
          "31.jpg"
        ]
      },
      {
        lat: 49.4831436,
        lng: 14.5247083,
        type: 3,
        title: {
          en: "",
          cs: "J. Ryjáčková Apex Bike, Jistebnice"
        },
        number: "32",
        description: {
          en: "",
          cs: "Půjčovna - při zapůjčení dvou kol zapůjčení třetího kola za 50 %. Ke každému kolu mapa zdarma. Ubytování - 10% sleva z ceny ubytování; při ubytování na 7 a více nocí zapůjčení kola na den."
        },
        address: {
          en: "",
          cs: "Krátká 193, Jistebnice"
        },
        tel: {
          en: "",
          cs: "731 402 906"
        },
        link: {
          en: "",
          cs: "ubytovanijistebnice.unas.cz"
        },
        email: {
          en: "",
          cs: "ubytovanijistebnice@centrum.cz"
        },
        images: [
          "32.jpg"
        ]
      },
      {
        lat: 49.6383650,
        lng: 14.2897669,
        type: 4,
        title: {
          en: "",
          cs: "Farma Kunclův mlýn, Brzina"
        },
        number: "34",
        description: {
          en: "",
          cs: "Při víkendovém pobytu (ubytování) na farmě zapůjčení jízdních kol na 1 den zdarma. Při týdenním pobytu zapůjčení kol zdarma na 1 den + vyhlídková jízda v kočáru."
        },
        address: {
          en: "",
          cs: "Brzina 7, Svatý Jan"
        },
        tel: {
          en: "",
          cs: "604 239 430"
        },
        link: {
          en: "",
          cs: "www.kuncluvmlyn.cz"
        },
        email: {
          en: "",
          cs: "kuncluvmlyn@volny.cz"
        },
        images: [
          "34.jpg"
        ]
      },
      {
        lat: 49.5776128,
        lng: 14.5391589,
        type: 4,
        title: {
          en: "",
          cs: "Hospoda u Škrpálu, Sedlec-Prčice"
        },
        number: "35",
        description: {
          en: "",
          cs: "Při objednání večeře nad 100 Kč po 17. hodině pivní speciál 0,5 l dle aktuální nabídky v hodnotě 32 Kč zdarma."
        },
        address: {
          en: "",
          cs: "Vítkovo náměstí 94, Sedlec-Prčice"
        },
        tel: {
          en: "",
          cs: "774 657 066"
        },
        link: {
          en: "",
          cs: "www.hospodauskrpalu.cz"
        },
        email: {
          en: "",
          cs: "j.budejsky@seznam.cz"
        },
        images: [
          "35.jpg"
        ]
      },
      {
        lat: 49.5317058,
        lng: 14.8091653,
        type: 4,
        title: {
          en: "",
          cs: "Hostinec na Růžku, M. Vožice"
        },
        number: "36",
        description: {
          en: "",
          cs: "10% sleva na odběr jednoho hlavního jídla ze stálého jídelního lístku."
        },
        address: {
          en: "",
          cs: "Jana Jeníka z Bratřic 94, Mladá Vožice"
        },
        tel: {
          en: "",
          cs: "725 632 967"
        },
        link: {
          en: "",
          cs: "www.na-ruzku.eu"
        },
        email: {
          en: "",
          cs: "martin.grohling@centrum.cz"
        },
        images: [
          "36.jpg"
        ]
      },
      {
        lat: 49.5263072,
        lng: 14.2017397,
        type: 4,
        title: {
          en: "",
          cs: "Hostinec u Námořníka, Chrást"
        },
        number: "38",
        description: {
          en: "",
          cs: "Ke konzumaci hlavního jídla káva zdarma."
        },
        address: {
          en: "",
          cs: "Chrást 32, Kovářov"
        },
        tel: {
          en: "",
          cs: "776 760 907"
        },
        link: {
          en: "",
          cs: "facebook.com/hostinecunamornika"
        },
        email: {
          en: "",
          cs: "morskanemoc@seznam.cz"
        },
        images: [
          "38.jpg"
        ]
      },
      {
        lat: 49.2963028,
        lng: 14.4684636,
        type: 4,
        title: {
          en: "",
          cs: "Hotel Panská, Bechyně"
        },
        number: "39",
        description: {
          en: "",
          cs: "10% sleva na ubytování v hotelu Panská.<br/> 10% sleva na jídlo z denního menu v restauraci."
        },
        address: {
          en: "",
          cs: "Náměstí TGM 54, Bechyně"
        },
        tel: {
          en: "",
          cs: "734 448 388"
        },
        link: {
          en: "",
          cs: "www.resort-bechyne.cz"
        },
        email: {
          en: "",
          cs: "koordinator@resort-bechyne.cz"
        },
        images: [
          "39.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.4739392,
        lng: 14.6748589,
        type: 4,
        title: {
          en: "",
          cs: "Hotel GOLD Chotoviny"
        },
        number: "40",
        description: {
          en: "",
          cs: "Při útratě nad 500 Kč v hotelové restauraci lahev vína zdarma."
        },
        address: {
          en: "",
          cs: "Táborská 68, Chotoviny"
        },
        tel: {
          en: "",
          cs: "398 998 751"
        },
        link: {
          en: "",
          cs: "www.hotelchotoviny.cz"
        },
        email: {
          en: "",
          cs: "recepce@hotelchotoviny.cz"
        },
        images: [
          "40.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.6034814,
        lng: 14.3099833,
        type: 4,
        title: {
          en: "",
          cs: "Statek Vletice"
        },
        number: "41",
        description: {
          en: "",
          cs: "Sleva 20 % z ceny ubytování v penzionu Statek Vletice ve dnech neděle - pátek při délce pobytu 2 a více nocí."
        },
        address: {
          en: "",
          cs: "Statek Vletice 10, Krásná Hora n. V."
        },
        tel: {
          en: "",
          cs: "607 750 019"
        },
        link: {
          en: "",
          cs: "www.penzionstatekvletice.cz"
        },
        email: {
          en: "",
          cs: "penzionstatekvletice@gmail.com"
        },
        images: [
          "41.jpg"
        ]
      },
      {
        lat: 49.4153392,
        lng: 14.6597406,
        type: 4,
        title: {
          en: "",
          cs: "Coffee & Tee, Tábor"
        },
        number: "42",
        description: {
          en: "",
          cs: "10 % sleva na nákup lahvového vína.<br/> Káva (espresso) + zákusek za 40 Kč (= 20 % sleva)."
        },
        address: {
          en: "",
          cs: "Tržní nám., Tábor"
        },
        tel: {
          en: "",
          cs: "731 905 363"
        },
        link: {
          en: "",
          cs: "www.pro-vino.cz"
        },
        email: {
          en: "",
          cs: "kafenatrznim@seznam.cz"
        },
        images: [
          "42.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5438781,
        lng: 14.5163864,
        type: 4,
        title: {
          en: "",
          cs: "Monínec"
        },
        number: "43",
        description: {
          en: "",
          cs: "Wellness zdarma pro ubytované v apartmánech Monínec a penzionu Monínec v období 1. 4. - 30. 11."
        },
        address: {
          en: "",
          cs: "Monínec 7, Sedlec-Prčice"
        },
        tel: {
          en: "",
          cs: "317 721 417"
        },
        link: {
          en: "",
          cs: "www.moninec.cz"
        },
        email: {
          en: "",
          cs: "rezervace@moninec.cz"
        },
        images: [
          "43.jpg"
        ]
      },
      {
        lat: 49.4117575,
        lng: 14.6569419,
        type: 4,
        title: {
          en: "",
          cs: "Hotel Dvořák Tábor****"
        },
        number: "44",
        description: {
          en: "",
          cs: "35% sleva na ubytování z pultové ceny, dle volné kapacity hotelu zdarma upgrade do vyšší kategorie pokoje; 10% sleva na konzumaci v hotelové restauraci 'LaCave' (sleva se netýká nápojů); 20% sleva na mléčnou a pivní lázeň při zakoupení ubytování."
        },
        address: {
          en: "",
          cs: "Hradební 3037, Tábor"
        },
        tel: {
          en: "",
          cs: "381 207 211"
        },
        link: {
          en: "",
          cs: "www.dvoraktabor.cz"
        },
        email: {
          en: "",
          cs: "dvoraktabor@dvoraktabor.cz"
        },
        images: [
          "44.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5067125,
        lng: 14.4531592,
        type: 4,
        title: {
          en: "",
          cs: "Parkhotel Mozolov"
        },
        number: "45",
        description: {
          en: "",
          cs: "Dítě do 6 let ubytování zdarma (ke každé dospělé osobě, při pobytu alespoň 3 noci)."
        },
        address: {
          en: "",
          cs: "Mozolov 6, Nadějkov"
        },
        tel: {
          en: "",
          cs: "603 504 096"
        },
        link: {
          en: "",
          cs: "www.mozolov.cz"
        },
        email: {
          en: "",
          cs: "mozolov@hotel-cz.com"
        },
        images: [
          "45.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5087075,
        lng: 14.5047603,
        type: 4,
        title: {
          en: "",
          cs: "Penzion Kateřina, Nepřejov"
        },
        number: "46",
        description: {
          en: "",
          cs: "Při týdenním pobytu gril, pingpong a krbové dříví zdarma po dobu pobytu. Prodloužený víkend – k deseti hostům dva hosté zdarma."
        },
        address: {
          en: "",
          cs: "Nepřejov 3, Milevsko-Nadějkov"
        },
        tel: {
          en: "",
          cs: "603 569 098"
        },
        tel2: {
          en: "",
          cs: "731 457 039"
        },
        link: {
          en: "",
          cs: "www.penzion-katerina.cz"
        },
        email: {
          en: "",
          cs: "info@penzion-katerina.cz"
        },
        images: [
          "46.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5060681,
        lng: 14.6119631,
        type: 4,
        title: {
          en: "",
          cs: "Penzion Na Rynku, Borotín"
        },
        number: "47",
        description: {
          en: "",
          cs: "Každá 5. noc zdarma. Cyklomapy a běžecké mapy zdarma. Tatranka ke kávě zdarma."
        },
        address: {
          en: "",
          cs: "Borotín 113"
        },
        tel: {
          en: "",
          cs: "603 569 098"
        },
        link: {
          en: "",
          cs: "www.borotinska.cz/pension"
        },
        email: {
          en: "",
          cs: "narynku@borotinska.cz"
        },
        images: [
          "47.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5769181,
        lng: 14.5398258,
        type: 4,
        title: {
          en: "",
          cs: "Penzion Na Tvrzi, Sedlec-Prčice"
        },
        number: "48",
        description: {
          en: "",
          cs: "Pro ubytované láhev vína na pokoji. K hlavnímu jídlu uvítací přípitek naší “Tvrzovicí”. Pro zákazníky zpřístupnění 1 000 let starého sklepa – pozůstatek tvrze rodu Rožmberků."
        },
        address: {
          en: "",
          cs: "Zahradní 88, Sedlec-Prčice"
        },
        tel: {
          en: "",
          cs: "737 766 889"
        },
        link: {
          en: "",
          cs: "www.facebook.com/natvrzi"
        },
        email: {
          en: "",
          cs: "jaroslava.trpkova@seznam.cz"
        },
        images: [
          "48.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5517783,
        lng: 14.5186169,
        type: 4,
        title: {
          en: "",
          cs: "Penzion Pod Moníncem"
        },
        number: "49",
        description: {
          en: "",
          cs: "50% sleva na 1 noc ubytování u pobytu na 4 a více nocí s polopenzí, 100% sleva na 1 noc ubytování u pobytu na 7 a více nocí s polopenzí."
        },
        address: {
          en: "",
          cs: "Jetřichovice 4, Sedlec-Prčice"
        },
        tel: {
          en: "",
          cs: "602 303 602"
        },
        link: {
          en: "",
          cs: "www.podmonincem.cz"
        },
        email: {
          en: "",
          cs: "podmonincem@seznam.cz"
        },
        images: [
          "49.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.6390483,
        lng: 14.6438894,
        type: 4,
        title: {
          en: "",
          cs: "Restaurace a penzion U Modré kočky,Votice"
        },
        number: "50",
        description: {
          en: "",
          cs: "Vstup na ROZHLEDNU VÁCLAVKA pro každého, kdo si u nás nacpe břich HLAVNÍM JÍDLEM a z kapsy mu 'čouhá' Toulavka (jedna vstupenka za jednu Toulavku)."
        },
        address: {
          en: "",
          cs: "Táborská 71, Votice"
        },
        tel: {
          en: "",
          cs: "739 434 717"
        },
        link: {
          en: "",
          cs: "www.votice-ubytovani.cz"
        },
        email: {
          en: "",
          cs: "modrakocka@atlas.cz"
        },
        images: [
          "50.jpg"
        ]
      },
      {
        lat: 49.4136428,
        lng: 14.6594508,
        type: 4,
        title: {
          en: "",
          cs: "Vinný bar a penzion Thir, Tábor"
        },
        number: "51",
        description: {
          en: "",
          cs: "Lahev vína zdarma při ubytování."
        },
        address: {
          en: "",
          cs: "Provaznická 152, Tábor"
        },
        tel: {
          en: "",
          cs: "775 220 092"
        },
        link: {
          en: "",
          cs: "www.thir.cz"
        },
        email: {
          en: "",
          cs: "jan@thir.cz"
        },
        images: [
          "51.jpg"
        ]
      },
      {
        lat: 49.3356169,
        lng: 14.5030708,
        type: 4,
        title: {
          en: "",
          cs: "RS Lužnice, Dobronice u Bechyně"
        },
        number: "52",
        description: {
          en: "",
          cs: "Parkování po celou dobu pobytu zdarma."
        },
        address: {
          en: "",
          cs: "Dobronice u Bechyně 113"
        },
        tel: {
          en: "",
          cs: "603 801 214"
        },
        link: {
          en: "",
          cs: "www.rsluznice.cz"
        },
        email: {
          en: "",
          cs: "info@rsluznice.cz"
        },
        images: [
          "52.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.5957386,
        lng: 14.5061356,
        type: 4,
        title: {
          en: "",
          cs: "Strnadovský mlýn, Vršovice"
        },
        number: "53",
        description: {
          en: "",
          cs: "Pro hladové tuláky: Zdarma exkurze na historickou Francisovu turbínu z r. 1946 a rámovou pilu – katr – z r. 1932. Pro zvídavé děti: Prohlídka farmy (ovce, kozy, koně, čuníci, husy). Pro ubytované poutníky: Při pobytu od 3 nocí finská sauna zdarma a láhev kvalitního vína na pokoj."
        },
        address: {
          en: "",
          cs: "Vršovice 1, Sedlčany"
        },
        tel: {
          en: "",
          cs: "724 120 714"
        },
        link: {
          en: "",
          cs: "www.strnadovskymlyn.cz"
        },
        email: {
          en: "",
          cs: "mlyn@strnadovskymlyn.cz"
        },
        images: [
          "53.jpg"
        ]
      },
      {
        hasTreasure: true,
        lat: 49.4128567,
        lng: 14.6607186,
        type: 4,
        title: {
          en: "",
          cs: "Hostel B. Bolzana, Tábor"
        },
        number: "55",
        description: {
          en: "",
          cs: "Snížená cena za ubytování na Hostelu Bernarda Bolzana 218,- Kč/osoba/noc (min. 2 osoby na 3 noci)."
        },
        address: {
          en: "",
          cs: "Školní náměstí 199, Tábor"
        },
        tel: {
          en: "",
          cs: "381 200 251"
        },
        link: {
          en: "",
          cs: "www.skolabolzano.cz/hostel"
        },
        email: {
          en: "",
          cs: "info@skolabolzano.cz"
        },
        images: [
          "56.jpg"
        ]
      },
      {
        lat: 49.2985514,
        lng: 14.4714669,
        type: 4,
        title: {
          en: "",
          cs: "Galvína - obchod s vínem a galerie,Bechyně"
        },
        number: "59",
        description: {
          en: "",
          cs: "Sleva 5 % na stáčená vína a lahvová vína.<br/> Vstup do galerie je zdarma."
        },
        address: {
          en: "",
          cs: "Libušina 176"
        },
        tel: {
          en: "",
          cs: "608 599 176"
        },
        link: {
          en: "",
          cs: "www.galvina.cz"
        },
        email: {
          en: "",
          cs: "obchod@galvina.cz"
        },
        images: [
          "59.jpg"
        ]
      },
      {
        lat: 49.4145294,
        lng: 14.6575936,
        type: 4,
        title: {
          en: "",
          cs: "AUX Café, Tábor"
        },
        number: "60",
        description: {
          en: "",
          cs: "10% sleva na veškerý sortiment."
        },
        address: {
          en: "",
          cs: "Žižkova 249, Střelnice - spolkový dům, Tábor"
        },
        tel: {
          en: "",
          cs: "605 538 998"
        },
        link: {
          en: "",
          cs: "www.auxcafe.com"
        },
        email: {
          en: "",
          cs: "auxcafe@post.cz"
        },
        images: [
          "60.jpg"
        ]
      }
    ];
  }
}