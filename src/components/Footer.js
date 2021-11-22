import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <>
      <div className='footer'>
          <div className='top-footer'>
              <div>
              <h2>خدمات ما</h2>
              
                  <ul>
                      <li><a href="#">مشاوره انلاین</a> </li>
                      <li><a href="#">مشاوره حضوری</a> </li>
                      <li><a href="#">نوبت دهی انلاین</a> </li>
                      <li><a href="#">مجله کنکور</a> </li>
                  </ul>
              </div>
              <div>
              <h2>مشاورین ما</h2>
                  <ul>
                      <li><a href="#">دکتر رضایی</a> </li>
                      <li><a href="#">کاظم قلمچی</a> </li>
                      <li><a href="#">پور دستمالچی</a> </li>
                      <li><a href="#">دکتر محمدیان</a> </li>
                  </ul>
              </div>
              <div>
              <h2>ارتباط باما</h2>
                  <ul>
                      <li><a href="#">moshaver@gmail.com</a> </li>
                      <li><a href="#">0980000000</a> </li>
                      <li><a href="#">linkdine</a> </li>
                  </ul>
              </div>
              
          </div>
          <div className='bot-footer'>
              <a href="/"><FaTelegramPlane/></a>
              <a href="/"><AiFillFacebook/></a>
              <a href="/"><AiFillTwitterCircle/></a>
              <a href="/"><GrInstagram/></a>
          </div>
      </div>
    </>
  )
}

export default Footer
