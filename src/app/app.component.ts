import {Component, OnInit, TemplateRef} from "@angular/core";
import {TranslationService} from "./services/translation.service";
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalRef: BsModalRef;
  modalImage: any;

  constructor(private _translate: TranslationService, private _modalService: BsModalService) {
    }

    ngOnInit() {
      this.selectLang("nl");
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
    this._translate.use(lang);
    }
}
