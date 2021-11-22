import React from 'react'
import {GiHealthIncrease} from 'react-icons/gi'

const images = [
    {
        id: 1,
        img: './../images/1.jpg',
       title:"ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
    },
    {
        id: 2,
        img: './../images/2.jpg',
        title:"ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
    },
    {
        
        id: 3,
        img: './../images/3.jpg',
        title:"ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده "
    }
]

const How = () => {
    return (
        <>
        <div style={{margin:'30px'}}><h2> <GiHealthIncrease/>{`  `}چطور مشاوره بگیریم ؟</h2></div>
        <div className='cover'>
            <div className="col">{images.map(item => {
                return (<ul key={item.id}>
                    <li className='col-img'><p>{item.title}</p><img width='200' className="img" src={item.img} alt={item.id} /></li>
                </ul>)
            })}
            </div>
            <div className='aks'></div>
            </div>
        </>
    )
}

export default How
