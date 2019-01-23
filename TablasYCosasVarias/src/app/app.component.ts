import { Component } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ret : Observable<String[]>
  url : string = 'https://apirestpersonasrafael.azurewebsites.net/api/personas';
 

  constructor(private pepe : ApiService , config: NgbModalConfig, private modalService: NgbModal){

    config.backdrop = 'static';
    config.keyboard = false;
  }

    ApiRest(){

      this.pepe.getProductos().subscribe(
        result => {
             
            if(result.code != 200){
              
                console.log(result);
            }
        },
        error => {
            console.log(<any>error);
        }
    );

    }

    open(content) {
      
      this.modalService.open(content);
    }

  
  }

 
  


