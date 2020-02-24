import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../share/user-role.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  phone = new FormControl('+380', [Validators.required,
    Validators.pattern('\\+380\\d{9}$')]);
  userRole = new FormControl('', Validators.required);
  myForm = new FormGroup({phone: this.phone, userRole: this.userRole});
  keys = Object.keys;
  roles = UserRole;


  constructor() { }

  ngOnInit(): void {
  }

  addUser() {

  }

  getErrorMessage() {
    return this.phone.hasError('required') ? 'Введіть телефон' :
      this.phone.hasError('pattern') ? 'Невірний телефон: +380XXYYYYYYY' :
        '';
  }
}
