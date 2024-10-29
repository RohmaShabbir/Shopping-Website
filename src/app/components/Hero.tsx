"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
    const settings = { 
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    };
    
    const slideData = [
        {
            id: 0,
            img: "/images/banner-1.png",
            title: "Tranding Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/images/banner-2.png",
            title: "Tranding Accessories",
            mainTitle: "MODREN SUNGLASSES",
            price: "$15"
        },
        {
            id: 2,
            img: "/images/banner-3.png",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30"
        }
    ];

    return (
        <div>
            <div className='container pt-6 lg:pt-0 '>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide 
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;




