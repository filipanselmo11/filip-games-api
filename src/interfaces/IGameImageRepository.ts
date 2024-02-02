import { GameImage } from "@prisma/client";

export interface IGameImageRepository {
    createGameImage(filename: string): Promise<GameImage>;
    listGameImages(): Promise<GameImage[]>;
}