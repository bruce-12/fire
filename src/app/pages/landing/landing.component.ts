import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';


import{FormsModule} from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms' ;


import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DatabaseService } from 'src/app/services/database.service';
import { Routes, RouterModule } from '@angular/router';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

students : any;

  constructor(public _data :DatabaseService){}




  Addusers(userData :NgForm){
    //add this to our database
    
  this._data.Addusers(userData.value);
  
  }

  ngOnInit(){

this._data.GetUsers().snapshotChanges().subscribe(Action =>{
  console.log(Action);
}
  )

  }

}





