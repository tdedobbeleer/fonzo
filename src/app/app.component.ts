import {Component} from "@angular/core";
import {TranslationService} from "./services/translation.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private en: Lang = {locale: 'en', display: 'English'};
    private nl: Lang = {locale: 'nl', display: 'Nederlands'};

    constructor(private _translate: TranslationService) {
    }

    ngOnInit() {
        this.selectLang(this.nl);
    }

    selectLang(lang: Lang) {
        // set default;
        this._translate.use(lang.locale);
    }
}

export interface Lang {
    locale?: string;

    display?: string;

}
