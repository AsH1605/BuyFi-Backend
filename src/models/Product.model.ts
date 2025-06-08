export interface Product{
    product_id: number;
    product: string;
    quantity: number;
    tags: string[];
    photo_url: string;
    description: string;
    created_at: Date;
}