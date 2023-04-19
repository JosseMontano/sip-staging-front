import { CompaniesByCat } from "@/interfaces/company/companiesByCat";
import { CategoryProductType } from "@/interfaces/product/categories";
import { getServicesObject } from "@/utils/getServices";

interface Params {
  categories: CategoryProductType[];
  company: CompaniesByCat[];
}

export const getCompany = async (id: number): Promise<{ data: Params }> => {
  const endpoint = "get-info-company/" + id;
  const { data } = await getServicesObject<Params>(endpoint);
  return {
    data: data,
  };
};
