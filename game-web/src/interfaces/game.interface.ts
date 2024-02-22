import { Message } from "./message.interface";

export interface Game extends Message {
    uid?: number;
    title: string;
    platform: string;
    category: string;
    year: number;
    description?: string;
}

export interface GameItem extends Message {
	game: Game;
}

export interface GameList extends Message {
	games: Game[];
}