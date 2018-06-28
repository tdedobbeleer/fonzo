import {Component, OnInit, TemplateRef} from "@angular/core";
import {TranslationService} from "./services/translation.service";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {PROPERTIES} from "./properties";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  modalImage: any;
  currentLang: string;
  private nl: string = "nl";
  private en: string = "en";
  private es: string = "es";

  constructor(private titleService: Title, private _translate: TranslationService, private _modalService: BsModalService) {
  }

  ngOnInit() {
    this.currentLang = localStorage.getItem('lang') || navigator.language || this.en;
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

    //Set the title
    this.titleService.setTitle(this.getProperty('title'));

    console.log("" +
      "               _______.\n" +
      "    ______    | .   . |\\\n" +
      "   /     /\\   |   .   |.\\\n" +
      "  /  '  /  \\  | .   . |.'|\n" +
      " /_____/. . \\ |_______|.'|\n" +
      " \\ . . \\    /  \\ ' .   \\'|\n" +
      "  \\ . . \\  /    \\____'__\\|\n" +
      "   \\_____\\/ " +
      "\n\nCreated by Tom De Dobbeleer (https://github.com/tdedobbeleer)")
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

  getProperty(key: string) {
    if (!key) return;
    return PROPERTIES[key] ? PROPERTIES[key] : key;
  }
}
