import { getServices } from '@/utils/getServices';

export const getCategories = async <T>(id:number): Promise<{data:T[]}> => {
  const endpoint = 'category_product/' + id;
  const { data } = await getServices<T>(endpoint);
  return {
    data: data,
  }
};
