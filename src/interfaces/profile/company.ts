export interface CompanyTypes {
  id: number;
  name: string;
}
export interface CreateCompanyType {
  user_id: string;
  name: string;
  description: string;
  ubication:string;
  photo: string;
  category_company_id: string;
  phone_number: string;
}
