import { Body, Controller, Get, Param, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
export class UsersController {

  constructor(private readonly usersService : UsersService){}

  @Get('alluser')
  @UseGuards(AuthGuard)
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
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto){
      return this.usersService.createUser(userData)   
  }
}
