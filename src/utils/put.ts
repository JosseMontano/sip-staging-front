import config from "../config/http";
import { getCookie } from "./cookie";

async function put<T, R>(
  url: string,
  body: T
): Promise<{ msg: string; data: R | null }> {
  try {
    const { token } = getCookie("token");
    const response = await fetch(config.backendUrl + url, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token,
      },

      body: JSON.stringify({
        ...body,
      }),
    });

    const res = await response.json();
    const { message, data } = res;
    return {
      msg: message,
      data: data,
    };
  } catch (error) {
    let msgError = "";
    if (error instanceof Error) {
      msgError = error.message;
    }
    return {
      msg: msgError,
      data: null,
    };
  }
}

export default put;
