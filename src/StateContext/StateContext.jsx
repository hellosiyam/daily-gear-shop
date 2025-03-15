import { createContext, useState } from "react";
import { getAddToCart, getWishList } from "../utlity/addToDb";
import { gadgetsData } from "../Data/data";
import PropTypes from "prop-types";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [cartListCount, setCartListCount] = useState(getAddToCart());
    const [wishListCount, setWishListCount] = useState(getWishList());

    const [addToCart, setAddToCart] = useState([])
    const [addToWish, setToWish] = useState([])

    const [totalCost, setTotalCost] = useState(0);
    const allGadgets = gadgetsData

    const handelValue = () => {
        setCartListCount(getAddToCart())
        setWishListCount(getWishList())
    }

    const dashboardData = () => {
        const addToCart = getAddToCart();
        const addToWish = getWishList();

        const addToCartList = allGadgets.filter(gadget => addToCart.includes(gadget.product_id))
        const addToWishList = allGadgets.filter(gadget => addToWish.includes(gadget.product_id))

        setAddToCart(addToCartList)
        setToWish(addToWishList)

        const total = addToCartList.reduce((sum, gadget) => sum + gadget.price, 0);
        setTotalCost(total);
    }

    const handelSort = () => {
        // const sorted = [...addToCart].sort((a, b) => a.price - b.price);
        const sorted = [...addToCart].sort((a, b) => a.price - b.price)
        setAddToCart(sorted)
    }

    return (
        <StateContext.Provider value={{ cartListCount, wishListCount, handelValue, dashboardData, addToCart, addToWish, totalCost, handelSort }}>
            {children}
        </StateContext.Provider>
    )
}

StateContext.propTypes = {
    children: PropTypes.element.isRequired
}

export default StateContext;