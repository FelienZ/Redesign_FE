import { ApiClient } from "../libs/api";
import type { GetGamesQueryParams } from "../types/gameQueryParams";

export const GameServices = {
    //handler search, semua yg via params: ex. /games?search=genshin, /games?genre=rpg
    getGameList: async(params:GetGamesQueryParams) => {
        return ApiClient.get('/games', {params})
    },
    getGameDetail: async(slug: string) => {
        return ApiClient.get(`/games/${slug}`)
    },
    getGenres: async() => {
        return ApiClient.get('/games/genres')
    },
    getPlatforms: async() => {
        return ApiClient.get('/games/platforms')
    },
    getDevelopers: async() => {
        return ApiClient.get('/games/developers')
    },
    getPublishers: async() => {
        return ApiClient.get('/games/publishers')
    },
    getRatings: async() => {
        return ApiClient.get('/games/ratings')
    },
}