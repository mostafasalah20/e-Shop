import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseProduct from '../../Hooks/UseProduct/UseProduct';

export default function MinSlider() {


    let { data } = UseProduct()
    console.log(data?.data);



    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };
    let setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return <>
        <div className='md:block hidden'>
            <Slider {...settings}>
                {data?.data.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} className='w-full m-0 p-0 h-[200px]' alt="nature" />
                        <h3 className='text-xl text-center font-semibold'>{item.title.split(' ').slice(0, 2).splice(' ')}</h3>
                    </div>
                ))}
            </Slider>
        </div>

        <div className='block md:hidden'>
            <Slider {...setting}>
                {data?.data.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} className='w-full m-0 p-0 h-[200px]' alt="nature" />
                        <h3 className='text-xl text-center font-semibold'>{item.title.split(' ').slice(0, 2).splice(' ')}</h3>
                    </div>
                ))}
            </Slider>
        </div>

    </>
}
