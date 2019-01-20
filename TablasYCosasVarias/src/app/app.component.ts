import { Component } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ret : Observable<String[]>
  url : string = 'https://apirestpersonasrafael.azurewebsites.net/api/personas';
 

  constructor(private pepe : ApiService){}

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

  
  }

 
  


