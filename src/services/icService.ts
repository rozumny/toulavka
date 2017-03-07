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
                    cs: "Malé občerstvení zdarma ke komentovaným prohlídkám zámku, kláštera, okruhům a výletům (platí při min. účasti 5 plně platících osob, v případě zámku 10 osob).<span class='color0'><br/><br/>Nám. T. G. M. 5, Bechyně, tel: 602 843 442<br/><span class='bold'>www.visitbechyne.cz</span><br/>touristinformationbechyne@gmail.com</span>"
                },
                images: [
                    "1.jpg"
                ]
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
                    cs: "Sleva 10 Kč ze základního a sníženého vstupného, případně sleva 30 Kč z rodinné vstupenky (platí pro společnou vstupenku do expozice Život ve středověku a na věž Kotnov).<span class='color0'><br/><br/>Klokotská, Tábor, tel: 381 252 788<br/><span class='bold'>www.husitskemuzeum.cz</span><br/>tabor@husitskemuzeum.cz</span>"
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
                    cs: "Sleva 20 Kč ze základního a sníženého vstupného, sleva 30 Kč z rodinného vstupného (platí jen pro společnou vstupenku do expozice Husité, podzemí a gotického sálu).<span class='color0'><br/><br/>Žižkovo náměstí 1, Tábor, tel: 381 254 286<br/><span class='bold'>www.husitskemuzeum.cz</span><br/>tabor@husitskemuzeum.cz</span>"
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
                    en: "4",
                    cs: "Klášter Milevsko"
                },
                number: "",
                description: {
                    en: "",
                    cs: "Sleva 20 % ze vstupného na prohlídku pro držitele karty.<span class='color0'><br/><br/>U Bažantnice 556, Milevsko, tel: 606 201 780<br/><span class='bold'>www.klastermilevsko.cz</span><br/>prohlidky@klastermilevsko.cz</span>"
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
                    cs: "Při zakoupení jedné vstupenky na Kozí hrádek druhá vstupenka zdarma.<span class='color0'><br/><br/>Kozí hrádek, Sezimovo Ústí,<br/>tel: 381 276 707, 737 254 684<br/><span class='bold'>www.kultura.sezimovo-usti.cz</span><br/>mexus@sezimovo-usti.cz</span>"
                },
                images: [
                    "5.jpg"
                ]
            },
            {
                lat: 49.4141636,
                lng: 14.6578281,
                type: 1,
                title: {
                    en: "",
                    cs: "Město Tábor"
                },
                number: "6",
                description: {
                    en: "",
                    cs: "Vstup do Galerie U Radnice zdarma po předložení platné vstupenky z expozice Táborský poklad (expozice ukončena 30. září 2017). 50% sleva na zhotovení fotografické pohlednice (15 x 20 cm) v Infocentru Město Tábor.<span class='color0'><br/><br/>Infocentrum Město Tábor, Žižkovo náměstí 2, Tábor<br/> tel: 381 486 230-234<br/><span class='bold'>www.visittabor.eu</span><br/>infocentrum@mutabor.cz</span>"
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
                    cs: "Možnost detailní prohlídky vybraných sbírkových předmětů (zbraně a ruční granáty).<span class='color0'><br/><br/>Klášterní 557 (II. nádvoří kláštera), Milevsko,<br/> tel: 382 521 093<br/><span class='bold'>www.muzeumvmilevsku.cz</span><br/>muzeum.milevsko@muzeumvmilevsku.cz</span>"
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
                    cs: "Muzeum pekařství a mlynářství Božetice<br/><br/>Sleva 20 % ze vstupného<span class='color0'><br/><br/>Božetice 24, Milevsko, tel: 777 197 336, 777 197 331<br/><span class='bold'>www.muzeumbozetice.cz</span><br/>info@muzeumbozetice.cz</span>"
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
                    cs: "Sleva 20 Kč ze základního a rodinného vstupného do Památníku dr. Edvarda Beneše v Sezimově Ústí.<span class='color0'><br/><br/>Dr. Edvarda Beneše 1138, Sezimovo Ústí<br/> tel: 381 261 674, 381 254 286<br/><span class='bold'>www.husitskemuzeum.cz</span><br/>tabor@husitskemuzeum.cz</span>"
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
                    cs: "Sleva 20 Kč ze základního a rodinného vstupného. Sleva 10 Kč ze sníženého vstupného.<span class='color0'><br/><br/>Petra Voka 152/I, Soběslav, tel: 381 523 421<br/><span class='bold'>www.blatskemuzeum.cz</span><br/>likarova@husitskemuzeum.cz</span>"
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
                    cs: "Při zakoupení jedné plnohodnotné vstupenky druhá vstupenka do skanzenu zdarma.<span class='color0'><br/><br/>Skanzen Vysoký Chlumec, tel: 733 371 546, 318 633 138<br/><span class='bold'>www.muzeum-pribram.cz</span><br/>info@muzeum-pribram.cz</span>"
                },
                images: [
                    "11.jpg"
                ]
            },
            {
                hasTreasure: true,
                lat: 49.2945133,
                lng: 14.4676314,
                type: 1,
                title: {
                    en: "",
                    cs: "Městské muzeum Bechyně"
                },
                number: "16",
                description: {
                    en: "",
                    cs: "K zakoupené vstupence zdarma keramický suvenýr z Bechyně - města keramiky.<span class='color0'><br/><br/>Náměstí T. G. M. 140, Bechyně, tel: 778 545 509<br/><span class='bold'>www.kulturnidum.cz</span><br/>infocentrum@kulturnidum.cz</span>"
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
                    cs: "Sleva 20 Kč ze základního a rodinného vstupného, sleva 10 Kč ze sníženého vstupného.<span class='color0'><br/><br/>Nám. Republiky 107, Soběslav, tel.: 381 524 853<br/><span class='bold'>www.blatskemuzeum.cz</span><br/>likarova@husitskemuzeum.cz</span>"
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
                    cs: "Při nákupu v poutních suvenýrech nad 300 Kč pohled nebo záložka zdarma.<span class='color0'><br/><br/>Staroklokotská 1, Tábor, tel.: 730 572 937<br/><span class='bold'>www.klokoty.cz</span><br/>klokotypoutni@centrum.cz</span>"
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
                    cs: "1x turistická vizitka ke 2 prodaným vstupenkám nebo k rodinné vstupence do kláštera.<span class='color0'><br/><br/>Klášterní 1, Votice, tel.: 775 683 394, 317 812 505<br/><span class='bold'>www.mesto-votice.cz</span><br/>klaster@votice.cz</span>"
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
                    cs: "Zámecká prohlídka zdarma.<span class='color0'><br/><br/>Brandlín 1, Tučapy, tel.: 608 131 315<br/><span class='bold'>www.zamekbrandlin.cz</span><br/>zamekbrandlin@seznam.cz</span>"
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
                    cs: "K jedné zakoupené dospělé vstupence 3 děti do 15 let zdarma.<span class='color2'><br/><br/>Nám. T. G. Masaryka 788, Tábor, tel: 774 128 073<br/><span class='bold'>szestabor.cz/botanicka</span><br/>botgarden@seznam.cz</span>"
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
                    cs: "Sleva 10 % na mléčné výrobky z kravského i kozího mléka. Sleva 50 % na nákup v sýrárně pro hosty ubytované na farmě. Při prohlídkách ochutnávka produktů zdarma.<span class='color2'><br/><br/>Mokřice 7, Krásná Hora nad Vltavou<br/> tel: 603 817 828, 318 862 444<br/><span class='bold'>www.capiletka.cz</span><br/>capiletka@seznam.cz</span>"
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
                    cs: "Sleva 20 % ze základní ceny vstupného do filmové zbrojnice. Při ubytování v hostelu vstup do zbrojnice zdarma.<span class='color2'><br/><br/>Pod Holečkovými sady 383, Tábor, tel: 775 630 665<br/><span class='bold'>www.housuvmlyn.cz</span><br/>info@housuvmlyn.cz</span>"
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
                number: "",
                description: {
                    en: "",
                    cs: "5% sleva na autobusovou dopravu. Ke každé noci v penzionu 1 láhev piva nebo nealko nápoje na osobu zdarma.<span class='color2'><br/><br/>Autobusy: Noskov 27<br/> Penzion: Náměstí obětí nacismu 19, Mladá Vožice<br/><span class='bold'>www.autobusy-dvorak.cz</span><br/>dvorak.noskov@seznam.cz</span>"
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
                    cs: "10% sleva na rodinné vstupné.<br/> 15% sleva na vstupné pro jednotlivce.<span class='color2'><br/><br/>Špitálské náměstí 275, Tábor, tel: 602 697 207<br/><span class='bold'>www.muzeumlegatabor.cz</span><br/>info@muzeumlegatabor.cz</span>"
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
                    cs: "10% sleva na vstupenku pro rodinu.<br/> 20% sleva pro jednotlivce.<span class='color2'><br/><br/>Kotnovská 138, Tábor, tel: 381 211 784<br/><span class='bold'>www.cokomuzeum.cz</span><br/>recepce@cokomuzeum.cz</span>"
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
                    cs: "Při zakoupení exkurze s kartou Toulavka ochutnávka piva zdarma.<span class='color2'><br/><br/>Vysoký Chlumec 29, tel: 318 401 311<br/><span class='bold'>www.pivovar-vysokychlumec.cz</span><br/>info@pivovar-vysokychlumec.cz</span>"
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
                    cs: "Ke vstupu do rozhledny a muzea výklad o kovářském řemesle zdarma.<span class='color2'><br/><br/>Moraveč 18, Mladá Vožice, tel: 776 849 711<br/><span class='bold'>www.rozhledna-kovarka.cz</span><br/>info@kovar-dobes.cz</span>"
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
                    cs: "Při zakoupení vstupenky do Václavky dostanete 1x presso s mlékem zdarma v restauraci U Modré kočky (naproti věži).<span class='color2'><br/><br/>Kostel sv. Václava, Votice, tel: 777 770 693, 604 235 359<br/><span class='bold'>www.votice-ubytovani.cz</span><br/>modrakocka@atlas.cz</span>"
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
                    cs: "Ráj pro děti: zahrady a zvířátka, venkovní herny a dílny, koupací jezírko - to vše se slevou 15 % (areál se postupně připravuje).<span class='color2'><br/><br/>Uhřice 1, Sedlec-Prčice, tel: 602 164 740<br/><span class='bold'>www.trojovskymlyn.cz</span><br/>pavlina@trojovskymlyn.cz</span>"
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
                    cs: "Zdarma mapa k cestě s hledáním pokladu. Zdarma výroba hliněného amuletu pro štěstí. Bonusy nejsou kombinovatelné s jinými slevami.<span class='color2'><br/><br/>Kovářov 201, tel: 702 542 054<br/><span class='bold'>www.zemeraj.cz</span><br/>info@zemeraj.cz</span>"
                },
                images: [
                    "25.jpg"
                ]
            },
            {
                hasTreasure: true,
                lat: 49.4501931,
                lng: 14.3599892,
                type: 2,
                title: {
                    en: "",
                    cs: "Muzeum milevských maškar"
                },
                number: "30",
                description: {
                    en: "",
                    cs: "1 bílá maska k dozdobení zdarma.<span class='color2'><br/><br/>Náměstí E. Beneše 6, Milevsko, tel: 383 809 016<br/><span class='bold'>Náměstí E. Beneše 6, Milevsko, tel: 383 809 016</span><br/>infocentrum@milevskem.cz</span>"
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
                    cs: "K jedné kartě Toulavka publikace v hodnotě 50 Kč zdarma.<span class='color2'><br/><br/>Zámecká 810, Votice, tel: 603 549 125<br/><span class='bold'>www.ochranafauny.cz</span><br/>buchalova@ochranafauny.cz</span>"
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
                    cs: "K jedné kartě Toulavka publikace v hodnotě 50 Kč zdarma.<span class='color2'><br/><br/>Hrachov 13, K. Hora n. Vlt., tel: 603 549 125<br/><span class='bold'>www.ochranafauny.cz</span><br/>buchalova@ochranafauny.cz</span>"
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
                    cs: "K zakoupené 1 hodině golfu druhá hodina zdarma.<span class='color3'><br/><br/>Počepice 115, Petrovice, tel: 775 724 351<br/><span class='bold'>www.adventure-golf.cz</span><br/>info@adventure-golf.cz</span>"
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
                    cs: "Při skalním lezení s horským vůdcem UIAGM v přírodě sleva 20 % , zapůjčení potřebného vybavení, doprava do lokalit do 35 km od Tábora a účast dětí do 15 let věku v doprovodu rodiče zdarma.<span class='color3'><br/><br/>ČSLA 405, Planá nad Lužnicí, tel: 723 633 428<br/><span class='bold'>www.adrenalin.cz</span><br/>adrenalin@adrenalin.cz</span>"
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
                    cs: "Poskytujeme zdarma zapůjčení rybářského náčiní k lovu na rybníku Velký Vrchotický.<span class='color3'><br/><br/>Srub u rybníka Velký Vrchotický,<br/> Vrchotice u Sedlce-Prčice, tel: 602 666 994<br/><span class='bold'>www.forestish.com</span>,forest-fish@seznam.cz</span>"
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
                    cs: "Bezplatný vstup na tréninkové plochy + zdarma zapůjčení golfové hole.<span class='color3'><br/><br/>Alenina Lhota 7, Jistebnice, tel: 775 913 338<br/><span class='bold'>www.cebr.cz</span><br/>recepce@cebr.cz</span>"
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
                    cs: "Zdarma zapůjčení oblečení (kombinézy).<span class='color3'><br/><br/>Nové Dvory 20, Heřmaničky, tel: 608 850 608<br/><span class='bold'>www.perlot.cz</span><br/>info@perlot.cz</span>"
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
                    cs: "Půjčovna - při zapůjčení dvou kol zapůjčení třetího kola za 50 %. Ke každému kolu mapa zdarma. Ubytování - 10% sleva z ceny ubytování; při ubytování na 7 a více nocí zapůjčení kola na den.<span class='color3'><br/><br/>Krátká 193, Jistebnice, tel: 731 402 906<br/><span class='bold'>ubytovanijistebnice.unas.cz</span><br/>ubytovanijistebnice@centrum.cz</span>"
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
                    cs: "Při víkendovém pobytu (ubytování) na farmě zapůjčení jízdních kol na 1 den zdarma. Při týdenním pobytu zapůjčení kol zdarma na 1 den + vyhlídková jízda v kočáru.<span class='color4'><br/><br/>Brzina 7, Svatý Jan, tel: 604 239 430<br/><span class='bold'>www.kuncluvmlyn.cz</span><br/>kuncluvmlyn@volny.cz</span>"
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
                    cs: "Při objednání večeře nad 100 Kč po 17. hodině pivní speciál 0,5 l dle aktuální nabídky v hodnotě 32 Kč zdarma.<span class='color4'><br/><br/>Vítkovo náměstí 94, Sedlec-Prčice, tel: 774 657 066<br/><span class='bold'>www.hospodauskrpalu.cz</span><br/>j.budejsky@seznam.cz</span>"
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
                    cs: "10% sleva na odběr jednoho hlavního jídla ze stálého jídelního lístku.<span class='color4'><br/><br/>Jana Jeníka z Bratřic 94, Mladá Vožice, tel: 725 632 967<br/><span class='bold'>www.na-ruzku.eu</span><br/>martin.grohling@centrum.cz</span>"
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
                    cs: "Ke konzumaci hlavního jídla káva zdarma.<span class='color4'><br/><br/>Chrást 32, Kovářov, tel: 776 760 907<br/><span class='bold'>facebook.com/hostinecunamornika</span><br/>morskanemoc@seznam.cz</span>"
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
                    cs: "10% sleva na ubytování v hotelu Panská.<br/> 10% sleva na jídlo z denního menu v restauraci.<span class='color4'><br/><br/>Náměstí TGM 54, Bechyně, tel: 734 448 388<br/><span class='bold'>www.resort-bechyne.cz</span><br/>koordinator@resort-bechyne.cz</span>"
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
                    cs: "Při útratě nad 500 Kč v hotelové restauraci lahev vína zdarma.<span class='color4'><br/><br/>Táborská 68, Chotoviny, tel: 398 998 751<br/><span class='bold'>www.hotelchotoviny.cz</span><br/>recepce@hotelchotoviny.cz</span>"
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
                    cs: "Sleva 20 % z ceny ubytování v penzionu Statek Vletice ve dnech neděle - pátek při délce pobytu 2 a více nocí.<span class='color4'><br/><br/>Statek Vletice 10, Krásná Hora n. V., tel: 607 750 019<br/><span class='bold'>www.penzionstatekvletice.cz</span><br/>penzionstatekvletice@gmail.com</span>"
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
                    cs: "10 % sleva na nákup lahvového vína.<br/> Káva (espresso) + zákusek za 40 Kč (= 20 % sleva).<span class='color4'><br/><br/>Tržní nám., Tábor, tel.: 731 905 363<br/><span class='bold'>www.pro-vino.cz</span><br/>kafenatrznim@seznam.cz</span>"
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
                    cs: "Wellness zdarma pro ubytované v apartmánech Monínec a penzionu Monínec v období 1. 4. - 30. 11.<span class='color4'><br/><br/>Monínec 7, Sedlec-Prčice, tel: 317 721 417<br/><span class='bold'>www.moninec.cz</span><br/>rezervace@moninec.cz</span>"
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
                    cs: "35% sleva na ubytování z pultové ceny, dle volné kapacity hotelu zdarma upgrade do vyšší kategorie pokoje; 10% sleva na konzumaci v hotelové restauraci 'LaCave' (sleva se netýká nápojů); 20% sleva na mléčnou a pivní lázeň při zakoupení ubytování.<span class='color4'><br/><br/>Hradební 3037, Tábor, tel. 381 207 211<br/><span class='bold'>www.dvoraktabor.cz</span><br/>dvoraktabor@dvoraktabor.cz</span>"
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
                    cs: "Dítě do 6 let ubytování zdarma (ke každé dospělé osobě, při pobytu alespoň 3 noci).<span class='color4'><br/><br/>Mozolov 6, Nadějkov, tel: 603 504 096<br/><span class='bold'>www.mozolov.cz</span><br/>mozolov@hotel-cz.com</span>"
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
                    cs: "Při týdenním pobytu gril, pingpong a krbové dříví zdarma po dobu pobytu . Prodloužený víkend – k deseti hostům dva hosté zdarma.<span class='color4'><br/><br/>Nepřejov 3, Milevsko-Nadějkov,<br/> tel: 603 569 098, 731 457 039<br/><span class='bold'>www.penzion-katerina.cz</span><br/>info@penzion-katerina.cz</span>"
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
                    cs: "Každá 5. noc zdarma. Cyklomapy a běžecké mapy zdarma. Tatranka ke kávě zdarma.<span class='color4'><br/><br/>Borotín 113, tel: 603 569 098<br/><span class='bold'>www. borotinska.cz/pension</span><br/>narynku@borotinska.cz</span>"
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
                    cs: "Pro ubytované láhev vína na pokoji. K hlavnímu jídlu uvítací přípitek naší “Tvrzovicí”. Pro zákazníky zpřístupnění 1 000 let starého sklepa – pozůstatek tvrze rodu Rožmberků.<span class='color4'><br/><br/>Zahradní 88, Sedlec-Prčice, tel: 737 766 889<br/><span class='bold'>www.facebook.com/natvrzi</span><br/>jaroslava.trpkova@seznam.cz</span>"
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
                    cs: "50% sleva na 1 noc ubytování u pobytu na 4 a více nocí s polopenzí, 100% sleva na 1 noc ubytování u pobytu na 7 a více nocí s polopenzí.<span class='color4'><br/><br/>Jetřichovice 4, Sedlec-Prčice, tel: 602 303 602<br/><span class='bold'>www.podmonincem.cz</span><br/>podmonincem@seznam.cz</span>"
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
                    cs: "Vstup na ROZHLEDNU VÁCLAVKA pro každého, kdo si u nás nacpe břich HLAVNÍM JÍDLEM a z kapsy mu 'čouhá' Toulavka (jedna vstupenka za jednu Toulavku).<span class='color4'><br/><br/>Táborská 71, Votice, tel: 739 434 717<br/><span class='bold'>www.votice-ubytovani.cz</span><br/>modrakocka@atlas.cz</span>"
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
                    cs: "Lahev vína zdarma při ubytování.<span class='color4'><br/><br/>Provaznická 152, Tábor, tel.: 775 220 092<br/><span class='bold'>www.thir.cz</span><br/>jan@thir.cz</span>"
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
                    cs: "Parkování po celou dobu pobytu zdarma.<span class='color4'><br/><br/>Dobronice u Bechyně 113, tel: 603 801 214<br/><span class='bold'>www.rsluznice.cz</span><br/>info@rsluznice.cz</span>"
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
                    en: "53",
                    cs: "Strnadovský mlýn, Vršovice"
                },
                number: "",
                description: {
                    en: "",
                    cs: "Pro hladové tuláky: Zdarma exkurze na historickou Francisovu turbínu z r. 1946 a rámovou pilu – katr – z r. 1932. Pro zvídavé děti: Prohlídka farmy (ovce, kozy, koně, čuníci, husy). Pro ubytované poutníky: Při pobytu od 3 nocí finská sauna zdarma a láhev kvalitního vína na pokoj.S<span class='color4'><br/><br/>Vršovice 1, Sedlčany, tel: 724 120 714<br/><span class='bold'>www.strnadovskymlyn.cz</span><br/>mlyn@strnadovskymlyn.cz</span>"
                },
                images: [
                    "53.jpg"
                ]
            },
            {
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
                    cs: "Snížená cena za ubytování na Hostelu Bernarda Bolzana 218,- Kč/osoba/noc (min. 2 osoby na 3 noci).<span class='color4'><br/><br/>Školní náměstí 199, Tábor, tel: 381 200 251<br/><span class='bold'>www.skolabolzano.cz/hostel</span><br/>info@skolabolzano.cz</span>"
                },
                images: [
                    "55.jpg"
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
                    cs: "Sleva 5 % na stáčená vína a lahvová vína.<br/> Vstup do galerie je zdarma.<span class='color4'><br/><br/>Libušina 176, tel: 608 599 176<br/><span class='bold'>www.galvina.cz</span><br/>obchod@galvina.cz</span>"
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
                    cs: "10% sleva na veškerý sortiment.<span class='color4'><br/><br/>Svatošova 307, tel: 605 538 998<br/><span class='bold'>www.auxcafe.com</span><br/>auxcafe@post.cz</span>"
                },
                images: [
                    "60.jpg"
                ]
            }
            ,
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
                    en: "Městské informační centrum Bechyně",
                    cs: ""
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