import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IUser, UserService } from "./user.service";

@Controller("/users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    addOneUser(@Body() body: IUser): IUser {
        return this.userService.insert(body)
    }

    @Get()
    getAllUsers(): IUser[] {
        return this.userService.find()
    }

    @Get()
    getUserById(@Param("id") id: string): object {
        return this.userService.findOne(+id)
    }
}