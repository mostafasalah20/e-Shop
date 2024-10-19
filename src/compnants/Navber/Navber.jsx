import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [newscroll, setnewscroll] = useState(false);



    const { cartItems } = useContext(CartContext);


    const cartCount = cartItems.reduce((acc, item) => acc + item.count, 0);

    useEffect(() => {
        const change = () => {
            if (window.scrollY > 30) {
                setnewscroll(true);
            } else {
                setnewscroll(false);
            }
        };

        window.addEventListener('scroll', change);

        return () => {
            window.removeEventListener('scroll', change);
        };
    }, []);

    return <>
        <nav className={`   block bg-[#0000000a] ${newscroll ? 'shadow-lg' : ''}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center space-x-3 rtl:space-x-reverse ">

                    <span className="self-center text-black  text-2xl font-bold whitespace-nowrap ">e-Shop</span>
                </div>
                <div className="flex md:order-2">

                    <button type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                        <div className=''>
                            <NavLink to={'/cart'}>
                                <div className='relative'>
                                    <i className='fa-solid fa-cart-shopping fa-2xl text-green-500' ></i>
                                    <span className='absolute bottom-[2px] left-[10px] right-0  text-white text-lg font-medium'>
                                        {cartCount > 0 ? cartCount : 0}
                                    </span>
                                </div>
                            </NavLink>

                        </div>

                        
                    </button>

                    <div className="relative hidden md:block">
                        <NavLink to={'/cart'}>
                            <div className='relative'>
                                <i className='fa-solid fa-cart-shopping fa-2xl text-green-500' ></i>
                                <span className='absolute bottom-1 left-[14px] right-0  text-white text-lg font-medium'>
                                    {cartCount > 0 ? cartCount : 0}
                                </span>
                            </div>
                        </NavLink>

                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <NavLink to={''} className="block md:py-1  py-2 text-center  text-black  rounded text-base  " aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'product'} className="block md:py-1  py-2 text-center  text-black  rounded text-base  " aria-current="page">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={'about'} className="block md:py-1  py-2 text-center  text-black  rounded text-base  " aria-current="page">about</NavLink>
                        </li>
                        <li>
                            <NavLink to={'contact'}  className="block md:py-1  py-2 text-center  text-black  rounded text-base  " aria-current="page">contact</NavLink>
                        </li>




                    </ul>
                </div>
            </div>
        </nav>
    </>;
}
