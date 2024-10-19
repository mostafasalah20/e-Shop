import React, { useState, useContext } from 'react';
import MinSlider from '../MinSlider/MinSlider';
import SliderHome from '../SliderHome/SliderHome';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../MinSlider/Loading/Loading';
import { CartContext } from '../../Context/CartContext.jsx'; 
import UseProduct from '../../Hooks/UseProduct/UseProduct.jsx';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useContext(CartContext); 

  
  let{data,isLoading}=UseProduct()
  // console.log(data);
  

  const filteredProducts = data?.data.filter(product => 
    activeCategory === 'All' ? true : product.category === activeCategory
  );

  return (
    <>
      <SliderHome />
      <MinSlider />
      <h1 className="text-center text-3xl mb-5 mt-10 font-bold">Latest Products</h1>
      <hr />

      {isLoading ? (
        <div className="flex w-full h-screen justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="container mt-9 mx-auto">
          <div className="buttns text-center">
            <button 
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-800 hover:bg-gray-600 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 ${activeCategory === 'All' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              All
            </button>
            <button 
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-800 hover:bg-gray-600 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 ${activeCategory === "men's clothing" ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveCategory("men's clothing")}
            >
              Men's Clothing
            </button>
            <button 
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-800 hover:bg-gray-600 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 ${activeCategory === 'jewelery' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveCategory('jewelery')}
            >
              Jewelery
            </button>
            <button 
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-800 hover:bg-gray-600 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 ${activeCategory === 'electronics' ? 'bg-gray-300' : ''}`}
              onClick={() => setActiveCategory('electronics')}
            >
              Electronics
            </button>
          </div>

          <div className="flex flex-wrap mt-12">
            {filteredProducts?.map((product) => (
              <div key={product.id} className="w-[100%] mx-auto md:w-1/4 my-6 relative product px-2 py-4">
                <Link to={`/detailsProduct/${product.id}`}>
                  <div>
                    <img className="w-full h-[300px]" src={product.image} alt={product.title} />
                    <h2 className="text-[#0aad0a]">{product.category}</h2>
                    <h2>{product.title.split(' ').slice(0, 2).join(' ')} ...</h2>
                    <div className="flex justify-between">
                      <h3>Price: {product.price} EGP</h3>
                      <h3> <i className="fas fa-star rating-color"></i> {product.ratingsAverage}</h3> 
                    </div>
                  </div>
                </Link>
                <button 
                  onClick={() => addToCart(product)} 
                  className="btn bg-[#0aad0a] w-full text-white rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
