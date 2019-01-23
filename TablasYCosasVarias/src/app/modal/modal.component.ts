import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {

    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

}
