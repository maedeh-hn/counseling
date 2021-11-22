import React from 'react'

const CarouselItem = ({id,src,des,phone}) => {
  return (
    <>
      <div >
          <div ><img src={src} alt={phone} /> </div>
          <div ><p>{des}</p><p>{phone}</p> </div>
      </div>
    </>
    
  )
}

export default CarouselItem
