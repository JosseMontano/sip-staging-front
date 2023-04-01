import { getServices } from '@/utils/getServices';

export const getProducts = async <T>(categoryId:number): Promise<{data:T[]}> => {
  const endpoint = 'product/1/' + categoryId;
  const { data } = await getServices<T>(endpoint);
  return {
    data: data,
  }
};
