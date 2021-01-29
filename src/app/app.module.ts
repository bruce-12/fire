import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';


import{FormsModule} from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms' 

import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DatabaseService } from './services/database.service';
import { ProfileComponent } from './pages/profile/profile.component';
import{AngularFireAuthModule} from '@angular/fire/auth';
  


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule ,
    AngularFireAuthModule
    
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
