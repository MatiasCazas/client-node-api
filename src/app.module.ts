import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseConfigModule } from './mongoose.module';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LocalStrategyService } from './auth/local-strategy/local-strategy.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://myuser:Ypjhdc9veTAwv7DR@myfirstcluster.2bo89.mongodb.net/test'), AuthModule],
  controllers: [AppController],
  providers: [AppService, LocalStrategyService],
})
export class AppModule {}
