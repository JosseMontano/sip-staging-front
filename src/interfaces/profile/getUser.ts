import { UserType } from "../auth/user";
import { CompaniesByCat } from "../company/companiesByCat";

export interface GetUserCompaniesType {
  companies: CompaniesByCat[];
}
