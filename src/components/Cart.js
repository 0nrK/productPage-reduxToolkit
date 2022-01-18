import React from 'react'

const Cart = () => {
    return (
        <div className="w-full bg-white flex flex-col justify-between rounded-lg  h-96 z-50 absolute top-17 border-t-1 border ">
            <h1 className="text-2xl p-8 font-bold">Cart</h1>
            <hr className="w-full" />
            <div className="h-2/3 flex w-full items-center justify-center">
                {/*                 <h2 className="text-xl">Your card is empty.</h2>*/}              <div>

                </div>
                <div className="flex flex-row w-full justify-evenly px-5 items-center">
                    <img className="w-14 h-14  rounded-lg" src="images/image-product-1-thumbnail.jpg" alt="productThumb" />
                    <div className="flex flex-col justify-center space-y-2">
                        <h3 className="text-gray-600">Autumn Limited Edition...</h3>
                        <div className="flex space-x-2 flex-row">
                            <span className="text-gray-600">$125.00</span>
                            <span className="text-gray-600">x 3</span>
                            <span className="font-bold">$375.000</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
            </div>
            <button className="bg-orange-500 font-bold p-4 m-5 rounded-lg text-white cursor-pointer ">
                Checkout
            </button>
        </div>
    )
}

export default Cart
