import { NewsServices } from "@/utils/services/newsServices";
import { useQuery } from "@tanstack/react-query";

export default function useNewsDetail(){
    return useQuery({
        queryKey: ['news'],
        queryFn: ()=> NewsServices.getNewsDetail
    })
}