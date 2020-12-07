export interface ProductCategory {
  id: string;
  name: string;
  storecode: string;
  status: string;
  imageURL: string;
}

export interface Product {
  id: string;
  status: string;
  inStock: boolean;
  name: string;
  size: string;
  price: number;
  offeredPrice: number;
  message: string;
  productImageUrl: string;
}
export interface CategoryToProduct {
  id: string;
  categoryId: string;
  productId: string;
}
