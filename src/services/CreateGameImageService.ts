import { IGameImageRepository } from "../interfaces/IGameImageRepository";


class CreateGameImageService {
    constructor(private gameImageRepository: IGameImageRepository) {}

    public async execute(filename: string) {
        const gameImage = await this.gameImageRepository.createGameImage(filename);

        return gameImage;
    }
}

export { CreateGameImageService };