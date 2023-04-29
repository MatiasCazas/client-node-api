import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[
    MongooseModule.forFeature([{ name: "auth", schema: AuthSchema }]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ]
})
export class AuthModule {}
