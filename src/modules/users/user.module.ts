import { Module } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { UserController } from "../users/user.controller";

@Module({
    imports: [],
    exports: [],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule { }