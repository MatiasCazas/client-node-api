import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from './auth.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel("auth") private authModel: Model<AuthDocument>,
    private jwtService: JwtService
  ){}

  async signIn(user: string, password: any){
    console.log(user)
    let foundUser = await this.authModel.find().exec()
    console.log(foundUser)
    if(foundUser[0]?.password !== password){
        throw new UnauthorizedException();
    }
    const payload = { username: foundUser[0].user, sub: foundUser[0].id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(user: string, password: string){
    let foundUser = await this.authModel.find({
        user: user
    }).exec()
    if(foundUser.length != 0){
        if(foundUser[0].user == user && foundUser[0].password == password){
            const payload = { username: foundUser[0].user, sub: foundUser[0].id };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        else return false
    } 
    else return false
  }
}