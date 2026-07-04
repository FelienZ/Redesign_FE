export const NewsSortBy =  {
  Terbaru: 'latest',
  Terlama: 'oldest',
  Judul: 'title',
} as const

export type GamesSortByType = typeof NewsSortBy[keyof typeof NewsSortBy]

export interface NewsQueryParams {
  //filtering page & keyword
  page?: number;
  limit?: number;
  search?: string;

  // filter relasi
  category? : string;

  featured?: boolean;
  sortBy?: string;
}