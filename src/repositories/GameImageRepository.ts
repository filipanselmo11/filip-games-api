import { prismaClient } from "../database";
import { IGameImageRepository } from "../interfaces/IGameImageRepository";


class GameImageRepository implements IGameImageRepository {
    
    public async createGameImage(filename: string, filepath: string): Promise<{ id: number; filename: string; filepath: string; createdAt: Date; }> {
        const gameImage = await prismaClient.gameImage.create({
            data: {
                filename,
                filepath
            },
        });
        
        return gameImage;
    }

    public async listGameImages(): Promise<{ id: number; filename: string; filepath: string; createdAt: Date; }[]> {
        const gameImages = await prismaClient.gameImage.findMany();

        return gameImages;
    }
}

export { GameImageRepository };