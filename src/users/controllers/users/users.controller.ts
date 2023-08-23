import { Body, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
export class UsersController {

  constructor(private readonly usersService : UsersService){}

  @Get('alluser')
  findAll() {
    return this.usersService.fetchUsers()
  }

  @Get('filter')
  getUserById(@Query('sortBy') sortBy: number, @Query('isActive') isActive: boolean){
    return{
        sortBy,
        isActive
    }
  }

  @Post('createuser')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto){
      return this.usersService.createUser(userData)
        
  }
}
