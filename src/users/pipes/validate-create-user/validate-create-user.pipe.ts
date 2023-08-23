import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const updatedAge = parseInt(value.age.toString());

    // if (isNaN(updatedAge)) {
    //   throw new HttpException('Age is not a number', HttpStatus.BAD_REQUEST);
    // } else {
    //   return {
    //     ...value,
    //     age: updatedAge,
    //   };
    // }

    return value;
  }
}
