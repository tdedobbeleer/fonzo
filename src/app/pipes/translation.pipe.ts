import {Pipe, PipeTransform} from "@angular/core";
import {TranslationService} from "../services/translation.service";

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslationPipe implements PipeTransform {

    constructor(private _translate: TranslationService) {
    }

    transform(value: string, args: any[]): any {
        if (!value) return;

        return this._translate.instant(value);
    }

}
