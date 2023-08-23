import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: NextFunction) {

    console.log('main mi called');
    
    const authKet = req.headers.authorization;
    if (!authKet) {
      throw new HttpException('No auth Token given', HttpStatus.FORBIDDEN);
    }

    if (authKet === 'sivaa') next();
    else throw new HttpException('auth Token not valid', HttpStatus.UNAUTHORIZED);
  }
}
