import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalFormComponent } from '../modal-form/modal-form.component';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  submitContactForm() {
    console.log('contact');
  }

  openContactForm() {
    this.modalRef = this.modalService.show(ModalFormComponent);
  }

  ngOnInit() {
  }
}
