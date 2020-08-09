import { User } from "../entities/User";

export interface IUsersRepository {

    findByEmail(email : string): Promise<boolean>;    
    save(user : User) : Promise<void>;

}