

import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext.jsx';
import Loading from '../MinSlider/Loading/Loading';

export default function Cart() {
    const { cartItems, updateCartItem, removeCartItem } = useContext(CartContext);

    
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, product) => total + product.price * product.count, 0);
    };

    return (
        <>
            {cartItems ? (
                <div className="container mx-auto mt-10">
                    <h1 className="text-center text-3xl mb-5 font-bold">Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <p className="text-center my-28">No products in cart</p>
                    ) : (
                        <>
                            <div className="hidden md:block my-10">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-16 py-3">
                                                <span className="sr-only">Image</span>
                                            </th>
                                            <th scope="col" className="px-6 py-3">Product</th>
                                            <th scope="col" className="px-6 py-3">Qty</th>
                                            <th scope="col" className="px-6 py-3">Price</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((product) => (
                                            <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                                                <td className="p-4">
                                                    <img src={product.image} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
                                                </td>
                                                <td className="px-6 py-4 font-semibold text-gray-900">
                                                    {product.title.split(' ').slice(0, 2).join(' ')}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => updateCartItem(product.id, product.count - 1)}
                                                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                                                            type="button"
                                                        >
                                                            <span className="sr-only">Decrease quantity</span>
                                                            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <span>{product.count}</span>
                                                        <button
                                                            onClick={() => updateCartItem(product.id, product.count + 1)}
                                                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100"
                                                            type="button"
                                                        >
                                                            <span className="sr-only">Increase quantity</span>
                                                            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-semibold text-gray-900">
                                                    {product.price} EGP
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => removeCartItem(product.id)}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                    
                            {cartItems.map((product) => (
                                <div key={product.id} className="md:hidden block w-[95%] mx-auto productRebops py-1 px-1 my-14">
                                    <img src={product.image} className="w-[80%] md:w-32 max-w-full max-h-full" alt={product.title} />
                                    <h2 className="text-lg text-center">{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                                    <div className="flex items-center justify-center text-lg my-5">
                                        <button
                                            onClick={() => updateCartItem(product.id, product.count - 1)}
                                            className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full"
                                            type="button"
                                        >
                                            <span className="sr-only">Decrease quantity</span>
                                            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <span className="text-lg">{product.count}</span>
                                        <button
                                            onClick={() => updateCartItem(product.id, product.count + 1)}
                                            className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full"
                                            type="button"
                                        >
                                            <span className="sr-only">Increase quantity</span>
                                            <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="px-6 py-4 font-semibold text-gray-900 flex justify-between items-center">
                                        <p>{product.price} EGP</p>
                                        <button
                                            onClick={() => removeCartItem(product.id)}
                                            className="rounded-2xl w-[40%] py-2 bg-red-900 font-medium text-white hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-between text-[15px] bg-gray-400 px-8 py-2">
                                <span>Total Cart Price</span>

                                <span>{calculateTotalPrice()} EGP</span>
                            </div>

                            <div className="w-[95%] md:w-[20%] mx-auto md:mx-0">
                                <button className="my-3 w-full p-2 bg-emerald-600 text-white rounded">
                                    Check out
                                </button>
                            </div>
                        </>
                    )}


                </div>
            ) : (
                <div className="flex w-full h-screen justify-center items-center">
                    <Loading />
                </div>
            )}
        </>
    );
}
