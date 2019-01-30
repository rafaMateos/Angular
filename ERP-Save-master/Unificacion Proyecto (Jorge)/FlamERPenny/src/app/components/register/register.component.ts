import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public newCatForm = new FormGroup({
    email: new FormControl('', Validators.required),

  });

    Data : Vendor
    email: String
    nombre : String
    email2: String
    password: String

  constructor(public firebase:AuthService) { }

  ngOnInit() {}

 

  algo() {
        
      //console.log(this.registerForm.value);
      console.log(this.email);
    
    
      
      //this.firebase.Create(this.registerForm.value.email.toString(), this.registerForm.value.password.toString());
      
      this.firebase.SaveVendor(this.Data).then(result => {

        console.log(result);

      });
      
      
        
    }

}
