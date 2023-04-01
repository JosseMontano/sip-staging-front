import post from "@/utils/post";
import { ChangePassType } from "../interfaces/changePass";

export const changePass = async (
  val: ChangePassType
): Promise<{ msg: string }> => {
  const url = "change-password";
  const { msg } = await post<ChangePassType, null>(url, val);
  return { msg: msg };
};
