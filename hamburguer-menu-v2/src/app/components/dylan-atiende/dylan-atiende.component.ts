import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dylan-atiende',
  templateUrl: './dylan-atiende.component.html',
  styleUrls: ['./dylan-atiende.component.css']
})
export class DylanAtiendeComponent implements OnInit {

    pepe : String;
    
  constructor() { }

  ngOnInit() {
    this.pepe = "Dylan vas a ser experto de BIG DATA";

  }

}
