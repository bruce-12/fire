import { Injectable } from '@angular/core';
import{AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import{AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { registerLocaleData } from '@angular/common';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public _fire:AngularFirestore,
private fireauth :AngularFireAuth) { }





//add users function 

Addusers(data){
  return this._fire.collection('users').add(data).then( results =>{
    console.log('successfully added user')
  });
  
}
//getdata from firestore

GetUsers() {
  return this._fire.collection('users');

}
//auth
register(){
  this.fireauth.createUserWithEmailAndPassword('mashiabruce@gmail.com','bruce@12').then(   ( ) => {
    console.log('successfully registered user')
    //
  }).catch( err =>{
    console.log('error',err.message)
    console.log('error',err.code)
    
  }
    )
  }
  
  



login(){
  this.fireauth.signInWithEmailAndPassword('mashiabruce@gmail.com','bruce@12').then(() => {
    console.log('successully logged in')
  }).catch(err =>{
    console.log()
  }
    )
}
logingoogle(){
  let provider =  new auth.GoogleAuthProvider();

  this.fireauth.signInWithPopup(provider).then(() => {
 console.log('login with google')
  }).catch(err => {
    console.log('err',err.message)
  }
    )

}
logout(){
  this.fireauth.signOut().then( ()  =>{
  console.log('successfully signed out')
}).catch ( err => {
  console.log('err',err.message)
}
  )





}
}


