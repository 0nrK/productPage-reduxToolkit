import React from 'react'
import Product from '../components/Product'
import { useSelector } from "react-redux";


const ProductPage = () => {
    const cartItems = useSelector((state) => state.cart);
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Product props={cartItems} />
        </div>
    )
}

export default ProductPage
