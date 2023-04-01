import { getCookie } from "./cookie";
import config from "../config/http";

export const getServices = async <T>(
  endPoint: string
): Promise<{ data: T[] }> => {
  try {
    const { token } = getCookie("token");
    const response = await fetch(config.backendUrl + endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return {
        data: result,
      };
    }
    return {
      data: [],
    };
  } catch (err) {
    console.error(err);
    return {
      data: [],
    };
  }
};


export const getServicesObject = async <T>(
  endPoint: string
): Promise<{ data: T }> => {
  try {
    const { token } = getCookie("token");
    const response = await fetch(config.backendUrl + endPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (response.ok) {
      const result = await response.json();
      return {
        data: result,
      };
    }
    return {
      data: {} as T,
    };
  } catch (err) {
    console.error(err);
    return {
      data: {} as T,
    };
  }
};
