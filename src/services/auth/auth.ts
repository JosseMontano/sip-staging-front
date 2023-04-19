import post from '@/utils/post';
import { SendEmailType } from '@/interfaces/auth/sendEmail';
import { LoginTs } from '@/interfaces/auth/login';
import { getServices, getServicesObject } from '@/utils/getServices';
import { SingUpType } from '@/interfaces/auth/singUp';

export const sendEmail = async (
  val: SendEmailType
): Promise<{ msg: string }> => {
  const url = 'send-code-email';
  const { msg } = await post<SendEmailType, null>(url, val);
  return { msg: msg };
};

export const login = async <T>(
  val: LoginTs
): Promise<{ msg: string; data: T | null }> => {
  const url = 'sign-in';
  const { msg, data } = await post<LoginTs, T>(url, val);
  return { msg: msg, data: data };
};

export const getUser = async <T>() => {
  const url = 'user/';
  const { data } = await getServicesObject<T>(url);
  return { data: data };
};

export const signInAsGuest = async <T, R>(): Promise<{
  msg: string;
  data: R | null;
}> => {
  const val: LoginTs = {
    email: 'invitado@gmail.com',
    password: '123456'
  };
  const url = 'sign-in';
  const { data, msg } = await post<LoginTs, R>(url, val);
  return { msg: msg, data: data };
};

export const singUp = async (val: SingUpType): Promise<{ msg: string }> => {
  const url = "sign-up";
  const { msg } = await post(url, val);
  return { msg: msg };
};