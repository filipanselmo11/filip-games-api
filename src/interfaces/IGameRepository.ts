import { Game } from "@prisma/client";

export interface IGameRepository {
    createGame(name: string, gender: string, price: string, urlImage: string): Promise<Game>;
    listGames(): Promise<Game[]>;
}