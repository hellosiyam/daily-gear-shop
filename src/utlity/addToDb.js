import { toast } from 'react-toastify';
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
        toast.success('add successfully')
    }
};

const removeStoredList = (id) => {
    const removeList = getAddToCart()
    if (removeList.includes(id)) {
        const cardIdFilter=removeList.filter(item => item !== id)
        console.log(cardIdFilter);
        const storedCardListStr = JSON.stringify(cardIdFilter)
        localStorage.setItem('add-list',storedCardListStr)
        toast.info('remove item')
    }
}

const removeAllStoredList = () => {
    localStorage.clear(getAddToCart());
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
        toast.error(`Already exists in the list`);
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
        toast.success(`successfully added in the list`);
    }
}

const removeFormWish = (id) => {
    const removeWishList = getWishList();
    if (removeWishList.includes(id)) {
        const removeFilter = removeWishList.filter(item => item !== id)
        const removeFilterStr = JSON.stringify(removeFilter)
        localStorage.setItem('wish-list', removeFilterStr)
        toast.info('remove item')
    }
}


export { addToStoredCartList, addToStoredWishList, getAddToCart, getWishList, removeStoredList, removeFormWish, removeAllStoredList }


