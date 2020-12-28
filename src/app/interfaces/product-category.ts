export interface ProductCategory {
  id: string;// to be populated from Firebase's doc.id
  name: string;
  status: string;
  imageURL: string;
  storeCode:string;
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
export interface ProductCategoryProductMapping {
  categoryId: string;
  productId: string;
}
