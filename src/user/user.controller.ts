import { Controller, Post, UseInterceptors, UploadedFile, UseGuards, Get, Param, Put, Body, Headers, UnauthorizedException, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { User } from './user.schema';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService
    ) { }

    @UseGuards(AuthGuard)
    @Post('')
    @UseInterceptors(FileInterceptor('profilePicture'))
    async createUser(@UploadedFile() file, @Body() user: User, @Request() req): Promise<User> {
        user.profilePicture = file.originalname;
        return this.userService.createUser(user);
    }

    @UseGuards(AuthGuard)
    @Get('')
    async getUsers(@Request() req): Promise<User[]> {
        console.log(req)
        return this.userService.getUsers();
    }

    @UseGuards(AuthGuard)
    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() user: User, @Request() req): Promise<User> {
        console.log(user)
        return this.userService.updateUser(id, user);
    }
}
