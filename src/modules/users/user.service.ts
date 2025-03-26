import { HttpException, Injectable } from "@nestjs/common";
export type IUser = { id?: number, name: string, email: string, password: string, age: number }

@Injectable()
export class UserService {
    #users: IUser[] = []

    insert(body: IUser): IUser {
        const data: IUser = { id: this.#users.length + 1, ...body }
        this.#users.push(data)
        return data
    }

    find(): IUser[] {
        return this.#users
    }

    findOne(id: number): object {
        const userOne = this.#users.find((v) => v.id === id)
        if (userOne) return userOne
        else throw new HttpException("Not Found", 404)
    }
}