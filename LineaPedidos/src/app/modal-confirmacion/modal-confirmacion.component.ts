import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})


export class ModalConfirmacionComponent implements OnInit {
  

  constructor(public modal: NgbActiveModal,private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open(name: string) {
    this._modalService.open(name);
  }

}

