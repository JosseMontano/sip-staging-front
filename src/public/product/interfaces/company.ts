export interface CompanyType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  name: string;
  description: string;
  photo: string;
  category_company_id: number;
  products: any;
  hours: HourType[];
}

export interface HourType {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: any;
  day: string;
  start_time: string;
  end_time: string;
  state: string;
  company_id: number;
}
