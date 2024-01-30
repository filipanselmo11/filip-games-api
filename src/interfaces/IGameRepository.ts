import { Game } from "@prisma/client";

export interface IGameRepository {
    createGame(name: string, gender: string, available: boolean): Promise<Game>;
    listGames(): Promise<Game[]>;
}