import React from 'react'

const Allmosh = ({src,id,des,phone}) => {
  return (
    
    <>
      <div className='allmosh'>
          <div style={{width:'60%'}}><h3>{phone}{des}</h3> </div>
          <div><img src={src} alt={id} width='100' /> </div>
      </div>
    </>
  )
}

export default Allmosh
