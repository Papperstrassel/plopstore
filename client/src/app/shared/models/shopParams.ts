export class ShopParams {
    brandIds: number[] = [];
    typeIds: number[] = [];
    sort = 'name';
    pageNumber = 1;
    pageSize = 6;
    search: string;
}
