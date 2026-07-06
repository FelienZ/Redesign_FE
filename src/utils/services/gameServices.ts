import { ApiClient } from "../libs/api";
import type { ApiResponse } from "../types/ApiResponse";
import type { GetGamesQueryParams } from "../types/games/gameQueryParams";
import type { Developer, Game, GameCards, Genre, Platform, Publisher, Rating } from "../types/games/Games";

export const GameServices = {
    //handler search, semua yg via params: ex. /games?search=genshin, /games?genre=rpg
    getGameList: async(params:GetGamesQueryParams): Promise<ApiResponse<GameCards[]>> => {
        const response = await ApiClient.get('/games', {params})
        return response.data
    },
    getGameDetail: async(slug: string): Promise<Game>  => {
        const response = await ApiClient.get(`/games/${slug}`)
        return response.data
    },
    getGenres: async(): Promise<Genre[]> => {
        const response = await ApiClient.get('/games/genres')
        return response.data
    },
    getPlatforms: async(): Promise<Platform[]> => {
        const response = await ApiClient.get('/games/platforms')
        return response.data
    },
    getDevelopers: async(): Promise<Developer[]> => {
        const response = await ApiClient.get('/games/developers')
        return response.data
    },
    getPublishers: async(): Promise<Publisher> => {
        const response = await ApiClient.get('/games/publishers')
        return response.data
    },
    getRatings: async(): Promise<Rating[]> => {
        const response = await ApiClient.get('/games/ratings')
        return response.data
    },
}