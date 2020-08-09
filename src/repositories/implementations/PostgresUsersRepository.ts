import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import {query} from '../../db'

export class PostgresUsersRepository implements IUsersRepository{
    async findByEmail(email : string) : Promise<boolean>{

        const user = await query('SELECT id,name,email,password FROM user_with_uuid WHERE email = $1', [email]);

        return user.rowCount !== 0 ? true : false
    }

    async save(user : User) : Promise<void>{

        query(
                "INSERT INTO user_with_uuid(id,name,email,password) VALUES ($1,$2,$3,$4)",
                [
                    user.id,
                    user.name,
                    user.email,
                    user.password
                ]
            );
    }
}