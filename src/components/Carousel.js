import React, { useEffect } from "react";
import Slider from "react-slick";
import {GiHealthIncrease} from 'react-icons/gi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import Allmosh from './Allmosh'

const images = [
    {
        
        id: 1,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a er or network is protected byer or network is protected byfirewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    },
    {
        id: 2,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    },
    {
        id: 3,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    },
    {
        id: 4,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    },
    {
        id: 5,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    },
    {
        id: 6,
        img: './../images/1.jpg',
        des: 'omputer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the ',
        phone: '09312343454'
    }
]

const Carousel = ({ id }) => {
    useEffect(() => {
        let mosh = document.querySelector('.mosh')
        let all = document.querySelector('.block-all')
        mosh.addEventListener('click', () => {
            all.classList.toggle('show-all')
            console.log('zdfd')
        })
    }, [])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (

        <>
            <div  style={{margin:'30px'}}><h2> <GiHealthIncrease/>{`  `}بهترین مشاوران </h2></div>
            <div className='my-carousel'>
                <Slider {...settings}>
                    {images.map((item, i) => {
                        return (
                            <div key={i} >
                                <CarouselItem src={images[i].img} id={images[i].id} des={images[i].des} phone={images[i].phone} />
                            </div>
                        )
                    })}
                </Slider>
                <div className='mosh'><h3>انتخاب همه</h3> </div>
            </div>
            <div className='block-all'>
                {images.map((item, i) => {
                    return (
                        <Allmosh key={i} src={images[i].img} id={images[i].id} des={images[i].des} phone={images[i].phone} />
                    )
                })}
            </div>
        </>
    )
}

export default Carousel
