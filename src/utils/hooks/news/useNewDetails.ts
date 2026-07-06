import { NewsServices } from "@/utils/services/newsServices";
import { useQuery } from "@tanstack/react-query";

export default function useNewsDetail(slug: string){
    return useQuery({
        queryKey: ['news', slug],
        queryFn: ()=> NewsServices.getNewsDetail(slug)
    })
}