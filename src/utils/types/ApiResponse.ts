import type { PaginationMeta } from "./paginationMeta";

export interface ApiResponse <T> {
    data: T,
    meta? :PaginationMeta
}