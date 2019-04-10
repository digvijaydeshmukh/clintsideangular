import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AuthGuardService } from './services/auth-guard.service';
import {FormsModule} from "@angular/forms"
import { AuthService } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent,canActivate:[AuthService]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
