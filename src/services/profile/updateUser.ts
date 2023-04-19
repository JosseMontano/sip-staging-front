import { UpdateUserType } from "@/interfaces/profile/updateUser";
import put from "@/utils/put";

export const updateUser = async <T>(
  val: UpdateUserType,
  id: number
): Promise<{ msg: string; data: T | null }> => {
  const url = "user/" + id;
  const { msg, data } = await put<UpdateUserType, T>(url, val);
  return { msg: msg, data: data };
};
