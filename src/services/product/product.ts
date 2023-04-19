import config from "@/config/http";
import { getCookie } from "@/utils/cookie";
import { getServices } from "@/utils/getServices";

export const getProducts = async <T>(
  companyId: number,
  categoryId: number
): Promise<{ data: T[] }> => {
  const endpoint = `product/${companyId}/` + categoryId;
  const { data } = await getServices<T>(endpoint);
  return {
    data: data,
  };
};

export const downloadReportProducts = async <T>(companyId: number) => {
  const endpoint = `report_products/${companyId}`;

  const { token } = getCookie("token");
  const options = {
    headers: {
      Authorization: token,
    },
  };

  const response = await fetch(config.backendUrl + endpoint, options);
  const blob = await response.blob();
  const file = window.URL.createObjectURL(blob);
  window.open(file, "_blank");
};
