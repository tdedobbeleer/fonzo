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
  {path: 'about', redirectTo: '/#about'},
  {path: 'menu', redirectTo: '/#menu'}
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
