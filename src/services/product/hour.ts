import { HoursType } from "@/interfaces/product/hour";
import { getServices } from "@/utils/getServices";
import post from "@/utils/post";

export const getHours = async <T>(
  companyId: number
): Promise<{ data: T[] }> => {
  const endpoint = `hour/${companyId}/`;
  const { data } = await getServices<T>(endpoint);
  return {
    data: data,
  };
};

export const saveHourCompany = async (
  val: HoursType
): Promise<{ msg: string; data: any }> => {
  const url = "hour";
  const { msg, data } = await post<HoursType, null>(url, val);
  return { msg: msg, data: data };
};
