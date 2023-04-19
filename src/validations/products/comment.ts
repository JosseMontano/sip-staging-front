
interface Params{
    description:string, productId:string
}

export const validateReview=({description, productId}:Params)=>{
    
    if(!description || !productId ) return;
}

