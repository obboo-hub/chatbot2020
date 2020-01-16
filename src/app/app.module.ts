import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { appRoutingModule } from './app.routing';

import { Page1Component } from './page1';
import { Page2Component } from './page2';
import { Page3Component } from './page3';

import { ChatModule } from './chat/chat.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    ChatModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
