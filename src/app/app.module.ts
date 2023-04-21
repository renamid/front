import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [ RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

