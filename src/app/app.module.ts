import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TranslationPipe} from "./pipes/translation.pipe";
import {TranslationService} from "./services/translation.service";

@NgModule({
    declarations: [
        AppComponent,
        TranslationPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        TranslationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
