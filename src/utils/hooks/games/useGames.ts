import { GameServices } from "@/utils/services/gameServices";
import type { GetGamesQueryParams } from "@/utils/types/games/gameQueryParams";
import { useQuery } from "@tanstack/react-query";

// default stale 5 menit di instance
export default function useGames(params: GetGamesQueryParams) {
  return useQuery({
    queryKey: ["games", params],
    queryFn: () => GameServices.getGameList(params ?? {}),
  });
}
