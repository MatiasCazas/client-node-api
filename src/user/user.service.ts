import { Injectable, Request, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';


@Injectable()
export class UserService {
  constructor(
    @InjectModel("users") private userModel: Model<UserDocument>
) {}

  async createUser(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    console.log(users)
    return users;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
  }

}
