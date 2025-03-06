import { createContext, useState } from "react";
import { getAddToCart, getWishList } from "../utlity/addToDb";

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [cartListCount, setCartListCount] = useState([]);
    const [wishListCount, setWishListCount] = useState([]);

    const handelValue = () => {
        setCartListCount(getAddToCart())
        setWishListCount(getWishList())
    } 

    return(
        <StateContext.Provider value={{cartListCount, wishListCount, handelValue}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateContext;