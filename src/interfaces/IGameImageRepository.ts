import { GameImage } from "@prisma/client";

export interface IGameImageRepository {
    createGameImage(filename: string, filepath: string): Promise<GameImage>;
    listGameImages(): Promise<GameImage[]>;
}