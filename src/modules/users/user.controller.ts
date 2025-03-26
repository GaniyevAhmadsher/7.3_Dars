import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
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

    @Get('/:id')
    getUserById(@Param("id") id: string): object {
        return this.userService.findOne(+id)
    }

    @Put('/:id')
    updateUserById(@Param("id") id: string, @Body() body: IUser): object {
        return this.userService.update(+id, body)
    }

    @Delete("/:id")
    deleteUserById(@Param("id") id: string): object {
        return this.userService.delete(+id)
    }
}
