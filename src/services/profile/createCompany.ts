import { CreateCompanyType } from "@/interfaces/profile/company";
import post from "@/utils/post";
import config from "@/config/http";

export const createNewCompany = async <T>(
  val: CreateCompanyType
): Promise<{ msg: string; data: T | null }> => {
  const url = "company";

  const { msg, data } = await post<CreateCompanyType, T>(
    url,
    val,
    config.backPyUrl
  );
  return { msg: msg, data: data };
};
