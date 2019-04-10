import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string
  password: string;

  constructor(private auth: AuthGuardService, private route: Router) { }

  ngOnInit() {

  }
  save(val, form) {
    console.log(val)
    console.log("form", form)
    if (form.valid) {
      this.auth.sendtoken(val.email)
      this.route.navigate(['home']);
      console.log("test", val);
    }

  }
}
