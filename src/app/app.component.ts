import {Component, OnInit} from "@angular/core";
import {TranslationService} from "./services/translation.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private _translate: TranslationService) {
    }

    ngOnInit() {
      this.selectLang("es");
    }

  selectLang(lang: string) {
        // set default;
    this._translate.use(lang);
    }
}
