import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { MiddlewareMiddleware } from './middleware/middleware.middleware';
import { AnotherMiMiddleware } from './middleware/another-mi/another-mi.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MiddlewareMiddleware)
      .forRoutes({
        path: 'users/alluser',
        method: RequestMethod.ALL,
      })
      .apply(AnotherMiMiddleware).forRoutes({
        path: 'users/alluser',
        method: RequestMethod.ALL,
      })
  }
}
