export interface NewsCategory{
    id: string;
    slug: string;
    category: string;
    description: string;
}

export interface News {
    id: string;
    slug: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    thumbnailUrl: string;
    bannerUrl: string;
    category: NewsCategory
}