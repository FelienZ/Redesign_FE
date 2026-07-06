import { GameServices } from "@/utils/services/gameServices";
import { useQuery } from "@tanstack/react-query";

export default function useGame(slug: string){
    return useQuery({
        queryKey: ['Game', slug],
        queryFn: ()=> GameServices.getGameDetail(slug)
    })
}