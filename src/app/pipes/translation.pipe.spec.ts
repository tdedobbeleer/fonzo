import {TranslationPipe} from "./translation.pipe";
import {TranslationService} from "../services/translation.service";
import {inject} from "@angular/core/testing";

describe('TranslationPipe', () => {
    it('create an instance', inject([TranslationService], (service: TranslationService) => {
        const pipe = new TranslationPipe(service);
        expect(pipe).toBeTruthy();
    }));
});
