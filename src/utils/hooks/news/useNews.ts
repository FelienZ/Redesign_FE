import { NewsServices } from "@/utils/services/newsServices";
import type { GetNewsQueryParams } from "@/utils/types/news/newsQueryParams";
import { useQuery } from "@tanstack/react-query";

export default function useNews(params: GetNewsQueryParams){
    return useQuery({
        queryKey: ['news'],
        queryFn: ()=> NewsServices.getNewsList (params ?? {})
    })
}