import { getServices } from '@/utils/getServices';

export const getCompany = async <T>(): Promise<{ data: T[] }> => {
  const endPoint = 'category-company';
  const { data } = await getServices<T>(endPoint);
  return {
    data
  };
};

export const getCompaniesByCat = async <T>(
  id: number
): Promise<{ data: T[] }> => {
  const endPoint = 'company/' + id;
  const { data } = await getServices<T>(endPoint);
  return {
    data
  };
};


