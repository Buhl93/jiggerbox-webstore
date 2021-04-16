import productsTypes from './products.types'
import { handleAddProduct, handleDeleteProduct, handleFetchProducts, handleFetchProduct } from './products.helpers'

export const addProduct = product => async dispatch => {
    try {
        const timestamp = new Date();
        await handleAddProduct({
            ...product,
            createdDate: timestamp
        })
        dispatch(fetchProducts());
    } catch(err) {
        //console.log(err)
    }
}

export const deleteProduct = productID => async dispatch => {
    try {
        await handleDeleteProduct(productID);
        dispatch(fetchProducts());
    } catch(err) {
        // console.log(err)
    }
}

// fetching all products with the helper function then updates redux store with setProducts
export const fetchProducts = (filters) => async dispatch => {
    try {
        const products = await handleFetchProducts(filters);
        dispatch(setProducts(products));
        
    } catch(err) {
         // console.log(err)
    }
}

export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload: products
})

export const fetchProduct = documentID => async dispatch => {
    try {
        const product = await handleFetchProduct(documentID);
        dispatch(setProduct(product));
    } catch(err) {
        //console.log(err)
    }
}

export const setProduct = product => ({
    type: productsTypes.SET_PRODUCT,
    payload: product
})