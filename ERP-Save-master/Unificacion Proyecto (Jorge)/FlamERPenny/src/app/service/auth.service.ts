import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from 'angularfire2/auth';

import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth, public firestore : AngularFirestore) {

   }

   logout(){

    return this.afAuth.auth.signOut();
   }


   LoginUser(email: string, pass: string){

    return new Promise((resolve , reject)=>{

      this.afAuth.auth.signInWithEmailAndPassword(email , pass)
      .then(userData => resolve(userData),
      err => reject(err))

    } );



   }

   Create(email: string, pass: string){

    return new Promise((resolve , reject)=>{

      this.afAuth.auth.createUserWithEmailAndPassword(email , pass)
      .then(userData => resolve(userData),
      err => reject(err))

    });

     
   
}

public SaveVendor(Data : {nombre : String}) {
  
  return this.firestore.collection('vendor').add(Data);
}




}
