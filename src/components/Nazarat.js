import React from "react";
import Slider from "react-slick";
import {GiHealthIncrease} from 'react-icons/gi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NazaratItem from "./NazaratItem";

const images = [
    {
        id: 1,
        img: './../images/1.jpg',
        des: 'رتیب نوشتن این ویژگی ها با استفاده از ویژگی transition مهم است و باید به ترتیب اشاره شده در بالا نوشته شوند.  مشاور  ',
        phone: '09312343454'
    },
    {
        
        id: 2,
        img: './../images/1.jpg',
        des: 'را برای یک عنصر تعریف می کنیم تا کاربر بتواند تغییر ویژگی های خاصی از آن عنصر را به صورت متحرک در طول زمان مشاهده کند. این امر به کاربر کمک می کند تا متوجه انجام تغییرات شود و تجربه کاربری بهتری داشته باشد',
        phone: '09312343454'
    },
    {
        id: 3,
        img: './../images/1.jpg',
        des: ' ر طول زمان مشاهده کند. این امر به کارر طول زمان مشاهده کند. این امر به کار',
        phone: '09312343454'
    },
    {
        id: 4,
        img: './../images/1.jpg',
        des: 'سلام شما تو متن گفتین که ویژگی هایی که برای transition تعریف میکنید باید به ترتیب باشه ولی من بدونم ترییب تست کردم جواب داد لطفا اصلاح کنید',
        phone: '09312343454'
    },
    {
        id: 5,
        img: './../images/1.jpg',
        des: 'ترتیب باشه ولی من بدونم ترییب تست کردم جواب د ',
        phone: '09312343454'
    },
    {
        id: 6,
        img: './../images/1.jpg',
        des: 'ی کنیم تا کاربر بتواند تغییر ویژگی های خاصی از آن عنصر را به صورت متحرک در طول زمان مشاهده کند. این امر به کاربر کمک می کند تا متوجه انجام تغییرات شود و تجر ',
        phone: '09312343454'
    }
]

const Nazarat = () => {
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
            <div style={{margin:'30px'}}><h2> <GiHealthIncrease/>{`  `}نظرات کاربران</h2></div>
            <div className='my-carousel w'>
                <Slider {...settings}>
                    {images.map((item, i) => {
                        return (
                            <div key={i} >
                                <NazaratItem src={images[i].img} id={images[i].id} des={images[i].des} phone={images[i].phone} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
            </>
    )
}

export default Nazarat