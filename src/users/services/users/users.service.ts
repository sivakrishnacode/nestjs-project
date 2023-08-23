import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private userList = [
    { username: 'siva', email: 'siva@123.com' , age: 21},
    { usernamename: 'sumi', email: 'sumi@123.com', age: 20 },
  ];

  fetchUsers() {
    return this.userList;
  }

  createUser(userData: CreateUserDto) {
    this.userList.push(userData);
    return this.userList;
  }
}
