import { IGameRepository } from "../interfaces/IGameRepository";


class ListGamesService {
    constructor(private gameRepository: IGameRepository) {}

    public async execute() {
        const games = await this.gameRepository.listGames();

        return games;
    }
}

export { ListGamesService };