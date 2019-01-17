import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user_name:any;
  public user_password:any;


  constructor(public firebase:AuthService) { }

  login(){
   
    console.log(this.user_name);
    console.log(this.user_password);

    this.firebase.LoginUser(this.user_name.toString(),this.user_password.toString());

    if(this.user_name == ""){

      alert("instroduce email");

    }else if(this.user_password == ""){

      alert("introduce password");
    }

   
  }

  ngOnInit() {
  }

}
