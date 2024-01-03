import { Component, OnInit } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  signOut
} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private Auth: Auth,
    
  ) { }

  ngOnInit() {
   
  };

  login() {
    signInWithPopup(this.Auth, new GoogleAuthProvider()).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  };

  loginAnonymously() {
    signInAnonymously(this.Auth).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  }

}
