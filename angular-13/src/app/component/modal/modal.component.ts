import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line: indent
  selector: "app-ngbd-modal",
  templateUrl: "./modal.component.html",
})
export class NgbdModalBasicComponent {

  constructor(private modalService: NgbModal) {}

  // modal Basic
  modalOpen(modalBasic: any) {
    this.modalService.open(modalBasic);
  }

  // modal Open Vertically Centered
  modalOpenVC(modalCenter: any) {
    this.modalService.open(modalCenter, {
      centered: true,
    });
  }

  // modal Open Backdrop Disabled
  modalOpenBackdrop(modalBackdrop: any) {
    this.modalService.open(modalBackdrop, {
      backdrop: false,
      centered: true
    });
  }

  // modal primary
  modalPOpen(modalPrimary: any) {
    this.modalService.open(modalPrimary);
  }

  // modal info
  modalIOpen(modalInfo: any) {
    this.modalService.open(modalInfo);
  }

  // modal success
  modalSOpen(modalSuccess: any) {
    this.modalService.open(modalSuccess);
  }

  // modal danger
  modalDOpen(modalDanger: any) {
    this.modalService.open(modalDanger);
  }

  // modal warning
  modalWOpen(modalWarning: any) {
    this.modalService.open(modalWarning);
  }

  // modal Open Small
  modalOpensm(modalSmall:any) {
    this.modalService.open(modalSmall, {
      centered: true,
      size: 'sm' // size:'sm' | 'md' | 'lg'
    });
  }

  // modal Open Medium
  modalOpenmd(modalMedium:any) {
    this.modalService.open(modalMedium, {
      centered: true,
      size: 'md' // size:'sm' | 'md' | 'lg'
    });
  }

  // modal Open Large
  modalOpenlg(modalLarge:any) {
    this.modalService.open(modalLarge, {
      centered: true,
      size: 'lg' // size:'sm' | 'md' | 'lg'
    });
  }

  // modal login
  modalOpenLogin(modalLogin: any) {
    this.modalService.open(modalLogin);
  }
  // modal register
  modalOpenRegiser(modalRegiser: any) {
    this.modalService.open(modalRegiser);
  }

  // modal scroll long
  modalOpenScrollLong(modalScrollLong: any) {
    this.modalService.open(modalScrollLong);
  }

  // modal scroll long inside
  modalOpenScrollLongInside(modalScrollLongInside: any) {
    this.modalService.open(modalScrollLongInside, { scrollable: true });
  }
}
