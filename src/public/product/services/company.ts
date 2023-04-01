import { getServices } from '@/utils/getServices';

export const getCompany = async <T>(id:number): Promise<{data:T[]}> => {
  const endpoint = 'get-company/' + id;
  const { data } = await getServices<T>(endpoint);
  return {
    data: data,
  }
};
