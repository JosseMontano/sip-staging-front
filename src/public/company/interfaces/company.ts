export interface Company {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  name: string;
  description: string;
  photo: string;
  products: Product[];
}

interface Product {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  name: string;
  description: string;
  price: number;
  photo: string;
  available: boolean;
  company_id: number;
}
