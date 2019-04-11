import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AuthGuardService } from './services/auth-guard.service';
import {FormsModule} from "@angular/forms"
import { AuthService } from './auth/auth.service';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NumToTextCls } from './pipes/texttonum';
import { SampleDirectiveDirective } from './directives/sample-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PipeSampleComponent,
    DirectiveSampleComponent,
    ViewChildComponent,
    NumToTextCls,
    SampleDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent,canActivate:[AuthService],children:[
        {path:'pipe',component:PipeSampleComponent},
        {path:'directive',component:DirectiveSampleComponent},
        {path:'view-child',component:ViewChildComponent}
      ]},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
