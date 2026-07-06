import  type { LookupData } from '../LookupData';

export interface Genre extends LookupData {
    id?: string;
    description?: string
}
export interface Rating extends Omit<LookupData, 'name'> {
    id?: string;
    label?: string;
    minimumAge?: number;
    description?: string
}

export interface Tag extends LookupData {
    id?: string;
    description?: string
}

export interface Developer extends LookupData {
    id?: string;
    logoUrl?: string;
    description?: string
    website?: string;
}

export interface Publisher extends LookupData {
    id?: string;
    logoUrl?: string;
    description?: string
    website?: string;
}
export interface Platform extends LookupData {
    id?: string;
    logoUrl?: string;
    description?: string
}

export interface GameCards {
    id: string;
    slug: string;
    title: string;
    thumbnailUrl: string;
    description: string;
    viewCount: number;
    isFeatured: boolean

    rating: Rating;
    gameGenres: Genre[];
}

export interface Game {
    id: string;
    slug: string;
    title: string;
    thumbnailUrl: string;
    description: string;
    viewCount: number;
    isFeatured: boolean
    bannerUrl: string;
    releaseDate: string;
    createdAt: string;
    updatedAt: string;

    gameTags: Tag[];
    gamePlatforms: Platform[];
    gameDevelopers: Developer[];
    gameGenres: Genre[];
    rating: Rating;
    publisher: Publisher;
}