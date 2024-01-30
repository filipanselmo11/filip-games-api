import { IGameRepository } from "../interfaces/IGameRepository";


class CreateGameService {
    constructor(private gameRepository: IGameRepository) { }

    public async execute(name: string, gender: string, available: boolean) {

        const game = await this.gameRepository.createGame(name, gender, available);

        return game;
    }
}

export { CreateGameService }