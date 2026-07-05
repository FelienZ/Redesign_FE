import { ApiClient } from "../libs/api";
import type { ApiResponse } from '../types/ApiResponse';
import type { News, NewsCategory } from "../types/news/News";
import type { GetNewsQueryParams } from "../types/news/newsQueryParams";

export const NewsServices = {
    getNewsList: async(params: GetNewsQueryParams): Promise<ApiResponse<News[]>> => {
        const response = await ApiClient.get(`/news`, {params})
        return response.data
    },
    getNewsDetail: async(slug: string): Promise<ApiResponse<News[]>> => {
        const response = await ApiClient.get(`news/${slug}`)
        return response.data
    },
    getCategories: async(): Promise<ApiResponse<NewsCategory>> => {
        const response = await ApiClient.get(`/news/categories`)
        return response.data
    }, 
}