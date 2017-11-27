import { Component, OnInit } from "@angular/core";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.css"]
})
export class ModalFormComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef
  ) {}

  ngOnInit() {}
}
