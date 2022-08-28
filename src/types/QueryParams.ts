interface Pagination {
    page: number,
    pageSize: number
}

export interface QueryParams extends Pagination {}

export interface RestaurantQueryParams extends QueryParams {
    searchTerm: string
}