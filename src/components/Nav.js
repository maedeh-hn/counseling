import React, { useEffect } from 'react'
import {BsSearch} from 'react-icons/bs'

const Nav = () => {
    useEffect(() => {
        const sub = document.querySelector('.sub-meno')
        const subParent = document.querySelector('.as')

        subParent.addEventListener('click', () => {
            sub.classList.toggle('show-nav')
            
        })

        document.body.addEventListener('click',(e)=>{
            if(!subParent.contains(e.target)){
                sub.classList.remove('show-nav')
            }
        })
        
    },[])
    // useEffect(() => {
    //     const images = [
    //         {
    //             id: 1,
    //             img: './../images/1.jpg',
    //             // alt:'1'
    //         },
    //         {
    //             id: 2,
    //             img: './../images/2.jpg'
    //         },
    //         {
    //             id: 3,
    //             img: './../images/3.jpg'
    //         }
    //     ]
    //     let indexArr = 0

    //     const banner = document.querySelector('.banner-img')
    //     setInterval(() => {
    //         indexArr++
    //         if (indexArr > images.length -1) {
    //             indexArr = 0
    //         }
    //         banner.src = images[indexArr].img
    //     }, 3000);
    // },[])

    return (
        <div>
            <header>
                <div className="top-header">
                    <div className='top-right'>
                        <h2>moshaver@gmail.com</h2>
                        <h2>0213000000</h2>
                    </div>
                    {/* <div className='top-left'>
                        <button className='btn'><h3>ورود /ثبت نام</h3> </button>
                    </div> */}
                </div>
                <hr />
                <nav className='nav'>

                    <ul className="nav-link">
                        <li> <a href='#'> صفحه اصلی</a> </li>
                        <li className='as' > <a> مشاوره</a>
                            <ul className="sub-meno">
                                <li><a href="/">دبستان</a>
                                    <ul className="sub-item">
                                        <li ><a href="#">ریاضی</a> </li>
                                        <li ><a href="#">علوم</a> </li>
                                        <li ><a href="#">پیام های قرانی</a> </li>
                                        <li ><a href="#">بخوانیم</a> </li>
                                        <li ><a href="#">بنویسیم</a> </li>
                                    </ul>
                                </li>
                                <li><a href="/">متوسطه اول</a>
                                <ul className="sub-item">
                                        <li ><a href="#">ریاضی</a> </li>
                                        <li ><a href="#">دینی</a> </li>
                                        <li ><a href="#">ادبیات</a> </li>
                                        <li ><a href="#">علوم تجربی</a> </li>
                                        <li ><a href="#">زبان</a> </li>
                                        <li ><a href="#">عربی</a> </li>
                                    </ul>
                                 </li>
                                 <li><a href="/">متوسطه دوم</a>
                                <ul className="sub-item">
                                        <li ><a href="#">ریاضی</a> </li>
                                        <li ><a href="#">ادبیات</a> </li>
                                        <li ><a href="#">زبان</a> </li>
                                        <li ><a href="#">عربی</a> </li>
                                    </ul>
                                 </li>
                                 <li><a href="/">ریاضی فیزیک</a>
                                <ul className="sub-item">
                                        <li ><a href="#">ریاضی</a> </li>
                                        <li ><a href="#">حسابان</a> </li>
                                        <li ><a href="#">هندسه تحلیلی</a> </li>
                                        <li ><a href="#">جبر</a> </li>
                                        <li ><a href="#">مثلثات</a> </li>
                                    </ul>
                                 </li>
                                 <li><a href="/">تجربی</a>
                                <ul className="sub-item">
                                        <li ><a href="#">ریاضی</a> </li>
                                        <li ><a href="#">فیزیک</a> </li>
                                        <li ><a href="#">زیست</a> </li>
                                        <li ><a href="#">دینی</a> </li>
                                        <li ><a href="#">زمین شناسی</a> </li>
                                    </ul>
                                 </li>
                            </ul>
                        </li>
                        <li> <a href='/'> وبلاگ</a> </li>
                        <li> <a href='/'> درباره ما </a> </li>
                        <li> <a href='/'> تماس با ما</a> </li>
                    </ul>

                    <div className="search">
                        <input type="text"  id='search-input' className='search-input' placeholder=' جستجو ...' />
                        <button className='btn-search'>
                        <label htmlFor="search-input" className='search-label'><BsSearch className='search-icon'/></label>
                        </button>
                    </div>
                </nav>
            </header>
            {/* <div className="banner">
                <img src='./../images/1.jpg' alt="anner" className='banner-img' />
                <div className="banner-title"> <h2>به بزرگترین سایت مشاوره ای خاورمیانه خوش امدید</h2></div>
            </div> */}
        </div>
    )
}

export default Nav
