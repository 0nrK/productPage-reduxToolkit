import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice"


const Product = ({ props }) => {

    const [activeImg, setActiveImg] = useState(0)
    const [itemQuantity, setItemQuantity] = useState(0)
    const [item, setItem] = useState({
        productName: "Fall Limited Edition Sneakers",
        quantity: itemQuantity,
        price: 150
    })


    const dispatch = useDispatch()

    const images = [
        { src: 'images/productImgs/image-product-1.jpg' },
        { src: 'images/productImgs/image-product-2.jpg' },
        { src: 'images/productImgs/image-product-3.jpg' },
        { src: 'images/productImgs/image-product-4.jpg' }

    ];

    const prevSlide = () => {
        setActiveImg(activeImg === 0 ? images.length - 1 : activeImg - 1);
    };

    const nextSlide = () => {
        setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);
    };


    function handleAddProduct() {
        if (itemQuantity > 0) {
            dispatch(addProduct(item))
        }
        console.log(props)
    }

    return (
        <div className="">
            <Navbar props={props} />
            <div className="flex justify-between p-5 mt-8 space-y-3 flex-col lg:flex-row">
                <div className="md:px-5 mr-auto">

                    {images.map((image, index) => (
                        <div className={index === activeImg ? "flex flex-row  relative  " : "hidden"} key={index}>
                            <img className="rounded-lg   object-cover" src={image.src} alt="productImg" />
                            <div className="md:hidden absolute top-1/2  w-full flex flex-row justify-between" >
                                <svg onClick={prevSlide} className="ml-3   cursor-pointer" width="15" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                                <svg onClick={nextSlide} className="mr-3 cursor-pointer " width="15" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                            </div>
                        </div>


                    ))}
                    <div className="hidden w-full md:space-x-3 mt-4 md:justify-between md:flex md:flex-row">

                        {images.map((image, index) => (
                            <img
                                key={index}
                                onClick={() => setActiveImg(index)}
                                className=" object-cover  mt-3  rounded-lg  w-24 h-24 lg:w-32 lg:h-32 hover:opacity-60" src={image.src} alt="productImg" />
                        ))}
                    </div>
                </div>

                <div className="md:ml-24 space-y-6 md:space-y-12">

                    <div className="md:mt-24 space-y-3">
                        <h3 className="font-bold text-orange-400">SNEAKER COMPANY</h3>
                        <h1 className="text-4xl md:text-6xl font-bold">Fall Limited Edition Sneakers</h1>
                        <p className="md:mt-16 text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer role. they'll withstand everything the weather can offer</p>
                    </div>
                    <div className="flex md:mt-12 flex-row md:flex-col md:justify-start md:items-start justify-between items-center">
                        <div className="flex flex-row items-center space-x-5">

                            <span className="text-5xl font-bold">$125</span>
                            <div className="h-fit bg-orange-100 py-1 px-2">
                                <span className="font-bold text-orange-400">-50%</span>
                            </div>
                        </div>
                        <span className="text-gray-300 font-bold line-through">$250.00</span>
                    </div>
                    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-3 items-center mt-12 ">
                        <div onClick={() => setItem({ ...item, quantity: itemQuantity })} className=" flex w-48 p-3  md:p-2  bg-blue-50  rounded-lg items-center justify-between  flex-row ">
                            <button onClick={() => itemQuantity > 0 && setItemQuantity(itemQuantity - 1)} className="text-orange-500 cursor-pointer text-3xl font-bold">
                                -
                            </button>
                            <span className="font-bold text-xl">{itemQuantity}</span>
                            <button onClick={() => setItemQuantity(itemQuantity + 1)} className="text-orange-500  cursor-pointer text-3xl font-bold">
                                +
                            </button>
                        </div>
                        <div className="flex cursor-pointer shadow-xl md:w-64 rounded-md flex-row p-3 items-center justify-center space-x-3 bg-orange-500 hover:bg-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <button onClick={handleAddProduct} className="text-white w-48 text-xl ">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
