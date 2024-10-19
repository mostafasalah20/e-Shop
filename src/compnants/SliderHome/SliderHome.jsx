import React from 'react'
import img3 from '../../assets/img3.jpg'
import img2 from '../../assets/img2.jpg'
import img1 from '../../assets/img1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function SliderHome() {
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
    return <>
        <div>
            <div className="w-full bg-black">
                <div className="md:flex">
                    <div className="w-full md:w-3/4 ">
                        <div className="image w-full ">
                            <Slider {...settings}>
                                <img src={img2} className='w-full h-[304px]' alt="nature" />
                                <img src={img1} className='w-full h-[304px]' alt="nature" />
                                <img src={img3} className='w-full h-[304px]' alt="nature" />
                            </Slider>
                        </div>
                    </div>

                    <div className="w-full hidden   md:w-1/4 md:flex  md:flex-col  h-[303px]">
                        <div className=" w-full h-[25vh]">
                            <img className='w-full  h-full' src={img1} alt="nature" />
                        </div>
                        <div className="w-full h-[25vh]">
                            <img className='w-full h-full' src={img2} alt="nature" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}



