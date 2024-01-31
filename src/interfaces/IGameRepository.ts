import { Game } from "@prisma/client";

export interface IGameRepository {
    createGame(name: string, gender: string, available: boolean, price: string): Promise<Game>;
    listGames(): Promise<Game[]>;
}