import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {TranslationService} from "./services/translation.service";
import {TranslationPipe} from "./pipes/translation.pipe";
import {BsDropdownModule, CarouselModule, ModalModule} from "ngx-bootstrap";
import {SafePipe} from "./pipes/safe.pipe";
import {RouterModule, Routes} from "@angular/router";
import {NgxJsonLdModule} from '@ngx-lite/json-ld';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'nl', redirectTo: '/?lang=nl'},
  {path: 'en', redirectTo: '/?lang=en'},
  {path: 'es', redirectTo: '/?lang=es'},
  {path: 'contact', redirectTo: '/#contact'},
  {path: 'en/contact', redirectTo: '/#contact?lang=en'},
  {path: 'nl/contact', redirectTo: '/#contact?lang=nl'},
  {path: 'es/contact', redirectTo: '/#contact?lang=es'},
  {path: 'about', redirectTo: '/#about'},
  {path: 'en/about', redirectTo: '/#about?lang=en'},
  {path: 'nl/about', redirectTo: '/#about?lang=nl'},
  {path: 'es/about', redirectTo: '/#about?lang=es'},
  {path: 'food', redirectTo: '/#food'},
  {path: 'en/food', redirectTo: '/#food?lang=en'},
  {path: 'nl/food', redirectTo: '/#food?lang=nl'},
  {path: 'es/food', redirectTo: '/#food?lang=es'},
];

@NgModule({
  declarations: [
    AppComponent,
    TranslationPipe,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxJsonLdModule
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
