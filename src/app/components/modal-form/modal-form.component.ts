import { Component, OnInit } from "@angular/core";

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

export class ProjectForm {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public website: string,
    public description: string
  ) {}
}

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.css"]
})
export class ModalFormComponent implements OnInit {
  public form = new ProjectForm('', '', '', '', '');

  constructor(
    private bsModalRef: BsModalRef
  ) {}

  private submitForm() {
    debugger;
    console.log("hello");
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.form); }

  ngOnInit() {}
}
