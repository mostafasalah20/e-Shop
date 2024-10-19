import React, { useContext } from 'react'
import UseDetailsProduct from '../../Hooks/UseDetailsProduct/UseDetailsProduct'
import Loading from '../MinSlider/Loading/Loading';
import { CartContext } from '../../Context/CartContext';


export default function DetailsProduct() {
  const {addToCart} =useContext(CartContext)
  let { data, isLoading } = UseDetailsProduct()
  console.log(data?.data);

  return <>
    <div className="container mx-auto mt-16">
      {isLoading ? <div className="flex w-full h-screen justify-center items-center"><Loading /></div> :
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img className='w-full h-[500px] ' src={data?.data.image} alt={data?.data.title} />
          </div>
          <div className="w-full md:w-1/2 px-10 mt-10">
          <h2 className='my-3 text-[#757575]  text-[22px] font-normal '>{data?.data.category}</h2>
            <h1 className='my-3 text-[#302f2f] text-[30px] font-normal'>{data?.data.title}</h1>
            <h3 className='text-[22px] font-bold'>Ratings: {data?.data.rating.rate} <i className='fas fa-star rating-color'></i></h3>
            <h2 className='text-[22px] font-bold'>Price: ${data?.data.price}</h2>
            <p className='text-[20px] font-normal'>{data?.data.description}</p>
            <button onClick={()=>addToCart(data?.data)} className='btn bg-[#0aad0a] w-full text-white rounded-md'>Add to Cart</button>
          </div>
        </div>}
    </div>


  </>
}
