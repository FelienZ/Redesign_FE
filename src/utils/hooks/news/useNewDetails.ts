import { NewsServices } from "@/utils/services/newsServices";
import { useQuery } from "@tanstack/react-query";

export default function useNewsDetail(slug: string){
    return useQuery({
        queryKey: ['newsDetail', slug],
        queryFn: () => NewsServices.getNewsDetail(slug)
    })
}