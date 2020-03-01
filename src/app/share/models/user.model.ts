import {UserRole} from './user-role.enum';

export class User {
  uid: string;
  phoneNumber: string;
  userRole: UserRole;
  displayName: string;
  codePPD: {id: number, name: string}[];
}
