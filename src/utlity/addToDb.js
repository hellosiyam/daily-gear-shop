import {toast } from 'react-toastify';
const getAddToCart = () => {
    const addToCartStr = localStorage.getItem('add-list');
    if (addToCartStr) {
        const addList = JSON.parse(addToCartStr);
        return addList;
    }
    else {
        return [];
    }
}

const addToStoredCartList = (id) => {
    const storedList = getAddToCart();
    if (storedList.includes(id)) {
        toast.error('Already exists in the list ');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListStr)
        toast('add successfully')
    }
}

// Wish List
const getWishList = () => {
    const addToWishListStr = localStorage.getItem('wish-list');
    if (addToWishListStr) {
        const addList = JSON.parse(addToWishListStr);
        return addList;
        
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getWishList();
    if (storedList.includes(id)) {
        console.log(id, 'Already exists in the list ');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
    }
}

export { addToStoredCartList, addToStoredWishList, getAddToCart, getWishList }


