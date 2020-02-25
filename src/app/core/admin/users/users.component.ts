import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../share/user-role.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {User} from '../../../share/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  phoneNumber = new FormControl('+380', [Validators.required,
    Validators.pattern('\\+380\\d{9}$')]);
  userRole = new FormControl('', Validators.required);
  userForm = new FormGroup({phoneNumber: this.phoneNumber, userRole: this.userRole});
  keys = Object.keys;
  roles = UserRole;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  users: BehaviorSubject<User[]>;
  userArray: User[];
  displayedColumns: string[] = ['phoneNumber', 'displayName', 'userRole', 'editUser', 'deleteUser'];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const user1 = new User();
    const user2 = new User();
    user1.phoneNumber = '+380501231212';
    user1.userRole = UserRole.admin;
    user2.phoneNumber = '+380962221133';
    user2.userRole = UserRole.user;
    this.userArray = [user1, user2];
    this.users = new BehaviorSubject(this.userArray);
    // this.users = new BehaviorSubject([user1, user2]);
    this.users.subscribe(console.log);
  }

  addUser() {
    if (this.userForm.valid) {
      if (!this.userArray.map(value => value.phoneNumber).includes(this.phoneNumber.value)) {
        const userNew = Object.assign(new User(), this.userForm.value);
        this.userArray.push(userNew);
      } else {
        this.userArray.forEach((value, index) => {
          if (value.phoneNumber === this.phoneNumber.value) {
            this.userArray[index] = Object.assign(new User(), this.userForm.value);
          }
        });
      }
      this.users.next(this.userArray);
      this.userForm.reset({phoneNumber: '+380'});
    }
  }

  getErrorMessage() {
    return this.phoneNumber.hasError('required') ? 'Введіть телефон' :
      this.phoneNumber.hasError('pattern') ? 'Невірний телефон: +380XXYYYYYYY' :
        '';
  }

  deleteUser(user: User) {
    this.userArray = this.userArray.filter(value => value.phoneNumber !== user.phoneNumber);
    this.users.next(this.userArray);
  }

  editUser(user: any) {
    this.userForm.reset(user);
  }
}
