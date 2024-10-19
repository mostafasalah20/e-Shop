import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UseProduct from '../../Hooks/UseProduct/UseProduct';

export default function About() {
    let { data } = UseProduct()
    console.log(data?.data);



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };
    return (
        <section className="about-section py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                   
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <Slider {...settings}>
                            {data?.data.map((item, index) => (
                                <div key={index}>
                                    <img src={item.image} className='rounded-lg shadow-lg w-full h-[450px]' alt="nature" />
            
                                </div>
                            ))}
                        </Slider>
                        
                    </div>

                    
                    <div className="w-full md:w-1/2 md:pl-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            We are a passionate team dedicated to providing the best products and services for our clients.
                            Our mission is to deliver exceptional quality and create experiences that leave a lasting impact.
                        </p>
                        <p className="text-lg text-gray-600">
                            With years of expertise in our industry, we continue to innovate and evolve to meet the changing
                            needs of our customers, ensuring we always offer the best solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
