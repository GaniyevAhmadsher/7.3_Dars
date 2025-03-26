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
        const userOne = this.#users.find((user) => user.id === id)
        if (!userOne) throw new HttpException("Not Found", 404); return userOne
    }

    update(id: number, body: IUser): object {
        const userIndex: number = this.#users.findIndex((user) => user.id === id)
        if (userIndex < 0) throw new HttpException("Not Found", 404)

        this.#users[userIndex] = { id, ...body }; return this.#users[userIndex]
    }

    delete(id: number): object {
        const userIndex: number = this.#users.findIndex((user) => user.id === id)
        if (userIndex < 0) throw new HttpException("Not Found", 404)

        return this.#users.splice(userIndex, 1);
    }
}