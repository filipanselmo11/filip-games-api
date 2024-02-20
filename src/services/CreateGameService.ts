import { IGameRepository } from "../interfaces/IGameRepository";


class CreateGameService {
    constructor(private gameRepository: IGameRepository) { }

    public async execute(name: string, gender: string, price: string, urlImage: string) {

        const game = await this.gameRepository.createGame(name, gender, price, urlImage);

        return game;
    }
}

export { CreateGameService }