import { GetHoursType } from "../product/hour"

export interface CompaniesByCat {
    id: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: any
    name: string
    description: string
    photo: string
    category_company_id: number
    products: any
    hours: GetHoursType[]
    phone_number:string;
    address:string;
  }
  