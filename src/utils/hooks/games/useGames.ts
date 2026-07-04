import { GameServices } from "@/utils/services/gameServices";
import type { GetGamesQueryParams } from "@/utils/types/gameQueryParams";
import { useQuery } from "@tanstack/react-query";

export default function useGames(params: GetGamesQueryParams = {}) {
  return useQuery({
    queryKey: ["games", params],
    queryFn: () => GameServices.getGameList(params),
  });
}
