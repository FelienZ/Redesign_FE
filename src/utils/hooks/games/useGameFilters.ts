import { GameServices } from "@/utils/services/gameServices";
import { useQuery } from "@tanstack/react-query";

// hook dipakai jika ada kebutuhan untuk render komponen yang butuh kelima list opsi filter
export default function useGameFilters(){
    const genres = useQuery({
        queryKey: ['Genres'],
        queryFn: ()=> GameServices.getGenres
    })
    const publishers = useQuery({
        queryKey: ['Publishers'],
        queryFn: ()=> GameServices.getPublishers
    })
    const platforms = useQuery({
        queryKey: ['Platforms'],
        queryFn: ()=> GameServices.getPlatforms
    })
    const developers = useQuery({
        queryKey: ['Developers'],
        queryFn: ()=> GameServices.getDevelopers
    })
    const ratings = useQuery({
        queryKey: ['Ratings'],
        queryFn: ()=> GameServices.getRatings
    })

    return {
    genres: genres.data ?? [],
    platforms: platforms.data ?? [],
    developers: developers.data ?? [],
    publishers: publishers.data ?? [],
    ratings: ratings.data ?? [],

    isLoading:
        genres.isLoading ||
        platforms.isLoading ||
        developers.isLoading ||
        publishers.isLoading ||
        ratings.isLoading,

    isError:
        genres.isError ||
        platforms.isError ||
        developers.isError ||
        publishers.isError ||
        ratings.isError,
};
}