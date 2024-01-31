import { IGameImageRepository } from "../interfaces/IGameImageRepository";


class CreateGameImageService {
    constructor(private gameImageRepository: IGameImageRepository) {}

    public async execute(filename: string, filepath: string) {
        const gameImage = await this.gameImageRepository.createGameImage(filename, filepath);

        return gameImage;
    }
}

export { CreateGameImageService };