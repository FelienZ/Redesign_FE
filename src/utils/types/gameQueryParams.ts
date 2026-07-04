
export const GamesSortBy =  {
  Terbaru: 'latest',
  Terlama: 'oldest',
  Terpopuler: 'popular',
  Judul: 'title',
} as const

export type GamesSortByType = typeof GamesSortBy[keyof typeof GamesSortBy]

export interface GetGamesQueryParams {
  page?: number;
  limit?: number;
  search?: string;

  // filter relasi
  rating?: string;
  genre?: string;
  developer?: string;
  publisher?: string;
  platform?: string;

  featured?: boolean;
  sortBy?: GamesSortByType;
}