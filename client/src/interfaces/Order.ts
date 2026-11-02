export interface Order{
    id:number;
    userId:number;
    productId:number | null;
    quantity:number;
    totalAmount:number;
    status:string;
}