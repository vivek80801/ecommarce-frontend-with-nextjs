import { product, productItems } from "../data/products"

export type ProductAction = {
    type: "ADD_TO_CART",
    id:number
}

export const productReducer = (state: product[] = productItems, action: ProductAction) => {
    switch (action.type) {
        case "ADD_TO_CART":
            
            return [...state.map(product =>  product.id === action.id? product.inCart=!true:product)];
    
        default:
            return state;
    }
}