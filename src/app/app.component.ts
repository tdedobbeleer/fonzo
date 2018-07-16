import {Component, Inject, OnInit, TemplateRef} from "@angular/core";
import {TranslationService} from "./services/translation.service";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PROPERTIES} from "./properties";
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  modalImage: any;
  currentLang: string;
  schema: any;
  days: any = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  private nl: string = "nl";
  private en: string = "en";
  private es: string = "es";

  constructor(@Inject(DOCUMENT) private document, private titleService: Title, private _translate: TranslationService, private _modalService: BsModalService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.initializeLang();
    //Set the schema (google structured data)
    this.initializeSchema();
    //Set the title
    this.initializeTitle();
    //Set the signature
    this.initializeSignature();
  }

  openModal(template: TemplateRef<any>, event: Event) {
    this.modalImage = event.srcElement.getAttribute("src");
    this.modalRef = this._modalService.show(
      template,
      Object.assign({}, {class: 'modal-lg'})
    );
  }

  selectLang(lang: string) {
    // set default;
    localStorage.setItem('lang', lang);
    this.currentLang = lang;
    this._translate.use(lang);
  }

  isToday(day) {
    return day == new Date().getDay() - 1;
  }

  getProperty(key: string) {
    if (!key) return;
    return PROPERTIES[key] ? PROPERTIES[key] : key;
  }

  private initializeTitle() {
    this.titleService.setTitle(this.getProperty('title'));
  }

  private initializeSignature() {
    console.log("" +
      "               _______.\n" +
      "    ______    | .   . |\\\n" +
      "   /     /\\   |   .   |.\\\n" +
      "  /  '  /  \\  | .   . |.'|\n" +
      " /_____/. . \\ |_______|.'|\n" +
      " \\ . . \\    /  \\ ' .   \\'|\n" +
      "  \\ . . \\  /    \\____'__\\|\n" +
      "   \\_____\\/ " +
      "\n\nCreated by Tom De Dobbeleer (https://github.com/tdedobbeleer)");
  }

  private initializeLang() {
    this._activatedRoute.queryParams.subscribe(params => {
      this.currentLang = params['lang'] || localStorage.getItem('lang') || navigator.language || this.en;
      if (this.currentLang.startsWith(this.en)) {
        this.currentLang = this.en;
      } else if (this.currentLang.startsWith(this.nl)) {
        this.currentLang = this.nl;
      } else if (this.currentLang.startsWith(this.es)) {
        this.currentLang = this.es;
      }
      else {
        this.currentLang = this.en;
      }

      localStorage.setItem('lang', this.currentLang);
      this.selectLang(this.currentLang);
    });
  }

  private initializeSchema() {
    this.schema = {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": this.getProperty('title'),
      "image": this.document.location.origin + "/assets/img/loading-logo.png",
      "@id": this.document.location.origin,
      "url": this.document.location.origin,
      "telephone": this.getProperty('tel'),
      "priceRange": "€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": this.getProperty('address.street'),
        "addressLocality": this.getProperty('address.city'),
        "postalCode": this.getProperty('address.postal'),
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.7244451,
        "longitude": -4.4202563000000055
      },
      "sameAs": [
        this.getProperty("facebook"),
        this.getProperty("instagram")
      ]
    }
  }
}
