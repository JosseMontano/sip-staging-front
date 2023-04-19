import config from "../config/http";
import { getCookie } from "./cookie";

//endpoint is to python
async function deleteServices<R>(
  url: string,
  endpoint?: string
): Promise<{ msg: string; idDelete: number | null }> {
  try {
    const { token } = getCookie("token");
    let urlEndpoint = endpoint ? endpoint : config.backendUrl;
    const response = await fetch(urlEndpoint + url, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const res = await response.json();
    const { message, id } = res;
    return {
      msg: message,
      idDelete: id,
    };
  } catch (error) {
    let msgError = "";
    if (error instanceof Error) {
      msgError = error.message;
    }
    return {
      msg: msgError,
      idDelete: null,
    };
  }
}

export default deleteServices;
