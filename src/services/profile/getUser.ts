import { getServicesObject } from "@/utils/getServices";

export const getUser = async <T>(id: number): Promise<{ data: T }> => {
  const endPoint = "get-companies/" + id;
  const { data } = await getServicesObject<T>(endPoint);
  return {
    data: data,
  };
};
