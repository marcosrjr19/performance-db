import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CreateUserRequestDTO } from './CreateUserDTO'
import { User } from '../../entities/User'

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) {

    }

    async execute(data: CreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);
    }
}