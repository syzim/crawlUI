import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './barGraph';

import {AngularFireModule} from 'angularfire2';
import {JobApiService} from './job-api.service';





@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
          apiKey: "AIzaSyCTlWzTrHTvQKJXteAk4EFArwt7b6UHxnE",
    authDomain: "jobsdatabase-f76ad.firebaseapp.com",
    databaseURL: "https://jobsdatabase-f76ad.firebaseio.com/",
    storageBucket: "jobsdatabase-f76ad.appspot.com",
  //  messagingSenderId: "1059488853648"
    })
   // AngularFireModule.initializeApp(firebaseConfig);


  ],
  providers: [JobApiService],
  bootstrap: [AppComponent]

})
export class AppModule {

 }
