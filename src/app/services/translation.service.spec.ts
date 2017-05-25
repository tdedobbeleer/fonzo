/* tslint:disable:no-unused-variable */
import {TestBed, inject} from "@angular/core/testing";
import {TranslationService} from "./translation.service";

describe('TranslationServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TranslationService]
        });
    });

    it('should ...', inject([TranslationService], (service: TranslationService) => {
        expect(service).toBeTruthy();
    }));
});
