import { ReviewType } from "@/interfaces/product/review";
import { getServices } from "@/utils/getServices";
import post from "@/utils/post";
import { promises } from "dns";

export const saveReview = async (
    val:ReviewType 
  ): Promise<{ msg: string, data:any }> => {
    const url = 'comment';
    const { msg, data } = await post<ReviewType, null>(url, val);
    console.log(data)
    return { msg: msg , data: data };
  };

 export const getReviews = async<T> (reviewId:number): Promise <{data:T[]}>=> {
    const endpoint = 'comment/' + reviewId;
    const { data } = await getServices<T>(endpoint);
    return{
        data:data
    } 
    
  };

