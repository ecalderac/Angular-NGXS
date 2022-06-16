import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddUser } from '../../../actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
    ) {

    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });

  }

  addUser(name: any, email: any) {
    console.log(name, email);
    this.store.dispatch(new AddUser({name, email}));
  }

  ngOnInit() {
  }

}
