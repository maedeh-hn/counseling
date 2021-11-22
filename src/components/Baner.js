import React , {useEffect} from 'react'

export default function Baner() {

    useEffect(() => {
        const images = [
            {
                id: 1,
                img: './../images/1.jpg',
                // alt:'1'
                
            },
            {
                id: 2,
                img: './../images/2.jpg'
            },
            {
                id: 3,
                img: './../images/3.jpg'
            }
        ]
        let indexArr = 0

        const banner = document.querySelector('.banner-img')
        setInterval(() => {
            indexArr++
            if (indexArr > images.length -1) {
                indexArr = 0
            }
            banner.src = images[indexArr].img
        }, 3000);
    },[])

    return (
       
            <div className="banner">
                <img src='./../images/1.jpg' alt="anner" className='banner-img' />
                <div className="banner-title"> <h2>به بزرگترین سایت مشاوره ای خاورمیانه خوش امدید</h2></div>
            </div>
      
    )
}
