import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRole} from '../../../share/user-role.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {User} from '../../../share/user.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  phoneNumber = new FormControl('+380', [Validators.required,
    Validators.pattern('\\+380\\d{9}$')]);
  userRole = new FormControl('', Validators.required);
  codePPD = new FormControl([]);
  displayName = new FormControl('');
  userForm = new FormGroup({
    phoneNumber: this.phoneNumber, displayName: this.displayName,
    codePPD: this.codePPD, userRole: this.userRole
  });
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
  // codes: {id: number, name: string}[] = [];
  ppdAll: {id: number, name: string}[] = [
    {id: 1, name: 'Валько Ярослав Петрович'},
    {id: 2, name: 'Горшковський Дмитро Дмитрович'},
    {id: 3, name: 'Мандюк Роман Михайлович'},
    {id: 4, name: 'Нєвєров  Олександр Миколайович'},
    {id: 5, name: 'Руснак Віталій Васильович'},
    {id: 6, name: 'Турко Сергій Васильович'},
    {id: 7, name: 'Хмара Павло Ігорович'}
  ];
  ppds: {id: number, name: string}[] = this.ppdAll.filter(value => !this.codePPD.value.map(v => v.id).includes(value.id));
  visible = true;
  selectable = true;
  removable = true;
  isOpenedEditor: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  drop(event: CdkDragDrop<{id: number, name: string}[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit(): void {
    const user1 = new User();
    const user2 = new User();
    user1.phoneNumber = '+380501231212';
    user1.userRole = UserRole.admin;
    user2.phoneNumber = '+380962221133';
    user2.userRole = UserRole.user;
    this.userArray = [user1, user2];
    this.users = new BehaviorSubject(this.userArray);
  }

  getPpds(): {id: number, name: string}[] {
    return this.ppdAll.filter(value => !this.codePPD.value?.map(v => v.id).includes(value.id));
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
      this.userForm.reset({phoneNumber: '+380', codePPD: []});
      this.closeEditor();
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

  editUser(user: User) {
    if (!user.codePPD) { user.codePPD = []; }
    this.userForm.reset(user);
    this.isOpenedEditor = true;
  }

  remove(item: {id: number, name: string}) {
    this.codePPD.setValue(this.codePPD.value.filter(value => value.id !== item.id));
    // this.ppds.push(item);
  }

  closeEditor() {
    this.isOpenedEditor = false;
  }
}
