import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {TranslationService} from "./services/translation.service";
import {TranslationPipe} from "./pipes/translation.pipe";
import {BsDropdownModule, CarouselModule, ModalModule} from "ngx-bootstrap";
import {SafePipe} from "./pipes/safe.pipe";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'nl', redirectTo: '/?lang=nl'},
  {path: 'en', redirectTo: '/?lang=en'},
  {path: 'es', redirectTo: '/?lang=es'}
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
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
