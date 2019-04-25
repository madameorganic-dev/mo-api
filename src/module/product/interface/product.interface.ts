export interface IProduct {
  name: string;
  productId: string;
  description: string;
  createdBy: string;
  isActive: boolean;
  isDeleted: boolean;
  masterProductId: string;
  productType: string;
  type: string;
  useTime: string;
  variant?: IProduct;
}
