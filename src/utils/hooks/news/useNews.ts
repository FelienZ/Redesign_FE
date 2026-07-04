import { NewsServices } from "@/utils/services/newsServices";
import type { NewsQueryParams } from "@/utils/types/newsQueryParams";
import { useQuery } from "@tanstack/react-query";

export default function useNews(params: NewsQueryParams = {}){
    return useQuery({
        queryKey: ['news', params],
        queryFn: () => NewsServices.getNewsList(params)
    })
}