/**
* @Author: Tushar Agarwal(tusharcoder) <tushar>
* @Date:   2017-01-27T23:42:51+05:30
* @Email:  tamyworld@gmail.com
* @Filename: app.module.ts
* @Last modified by:   tushar
* @Last modified time: 2017-01-28T00:49:44+05:30
*/



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBmr4m7hQ4cN_m9vAM9u8eRg8eVC9LXE6k",
//   authDomain: "loginhome-96a0d.firebaseapp.com",
//   databaseURL: "https://loginhome-96a0d.firebaseio.com",
//   projectId: "loginhome-96a0d",
//   storageBucket: "",
//   messagingSenderId: "614322103945"
// };
// firebase.initializeApp(config);

	  // Initialize Firebase
	  export const firebaseconfig = {
	      apiKey: "AIzaSyBmr4m7hQ4cN_m9vAM9u8eRg8eVC9LXE6k",
	          authDomain: "loginhome-96a0d.firebaseapp.com",
		      databaseURL: "https://loginhome-96a0d.firebaseio.com",projectId: "loginhome-96a0d",
		          storageBucket: "",
			      messagingSenderId: "614322103945"
			   };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseconfig,{
			provider: AuthProviders.Google,
			method: AuthMethods.Popup
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
