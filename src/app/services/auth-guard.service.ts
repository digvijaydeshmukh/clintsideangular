import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private route:Router) { }

  sendtoken(token){
    localStorage.setItem("loggedIn",token)
  }

  gettoken(){
    return localStorage.getItem("loggedIn")
  }
  isloggedIn(){   
    return this.gettoken()!=null
  }
  logout() {
    localStorage.removeItem("loggedInUser");
  }
}
