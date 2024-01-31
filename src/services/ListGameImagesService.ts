import { IGameImageRepository } from "../interfaces/IGameImageRepository";


class ListGameImagesService {
    constructor(private gameImageRepository: IGameImageRepository) {}

    public async execute () {
        const gameImages = await this.gameImageRepository.listGameImages();

        return gameImages;
    }
}

export { ListGameImagesService };