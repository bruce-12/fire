import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from './../../services/database.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})





export class ProfileComponent implements OnInit {
  constructor(public Data: DatabaseService, public _route: ActivatedRoute) {}
  student: any;
  reference: any;
  name:any;
  surname:any;
  address:any;
  contacts :any;
users;any;
  ngOnInit() {
    //getting user ID
    this.reference = this._route.snapshot.paramMap.get('ref');
    console.log('reference:', this.reference);

    
    

  }
}

