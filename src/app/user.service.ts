import { Injectable } from '@angular/core';
import { USER_ARM } from './mock-data/mock-user';
import { User } from './domain/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUser(): User {
    return USER_ARM;
  }

  constructor() { }
}
