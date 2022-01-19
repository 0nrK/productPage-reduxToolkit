import React, { useState } from 'react'
import Cart from './Cart'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCardOpen, setIsCardOpen] = useState(false)
    return (
        <nav className="">
            <div className="flex flex-row px-5 md:px-0 py-5 items-center justify-between ">
                <div className="flex flex-row md:p-3 space-x-3 items-center">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} xmlns="http://www.w3.org/2000/svg" className="md:hidden h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <div className="flex flex-row md:space-x-12 items-center">
                        <h1 className="font-bold  -mt-2 text-4xl">sneakers</h1>
                        <ul className="hidden md:flex cursor-pointer   md:space-x-5">
                            <li className="text-gray-500">Collections</li>
                            <li className="text-gray-500">Men</li>
                            <li className="text-gray-500">Women</li>
                            <li className="text-gray-500">About</li>
                            <li className="text-gray-500">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row space-x-3  md:space-x-9 items-center">
                    <div className="relative">
                        <svg onClick={() => setIsCardOpen(!isCardOpen)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:w-9 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <div className="absolute flex items-center top-3 -right-2 bg-red-500 rounded-full w-5 h-5 md:w-6 md:h-6">
                            <span className="mx-auto text-xs text-white">3</span>
                        </div>
                    </div>
                    <img className="w-9 h-9 md:h-12 md:w-12" src="images/image-avatar.png" alt="userImg" />
                </div>
            </div>
            {
                isMenuOpen &&
                <div className="absolute  transition duration-300 top-0 left-0 p-5 z-50 h-full bg-red-500 w-3/4">
                    <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">X</span>
                    <ul className="space-y-2 mt-12 text-center text-xl">
                        <li>Home</li>
                        <li>About</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                    </ul>
                </div>
            }
            {isCardOpen && <Cart />}
        </nav >
    )
}

export default Navbar
