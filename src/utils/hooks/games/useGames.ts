import { GameServices } from "@/utils/services/gameServices";
import { useQuery } from "@tanstack/react-query";

// default stale 5 menit di instance
export default function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: () => GameServices.getGameList,
  });
}
