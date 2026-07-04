import { ApiClient } from "../libs/api";
import type { NewsQueryParams } from "../types/newsQueryParams";

export const NewsServices = {
    getNewsList: async(params: NewsQueryParams) => {
        return ApiClient.get(`/news`, {params})
    },
    getNewsDetail: async(slug: string) => {
        return ApiClient.get(`news/${slug}`)
    },
    getCategories: async() => {
        return ApiClient.get(`/news/categories`)
    }, 
}