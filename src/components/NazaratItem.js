import React from 'react'

const NazaratItem = ({id,src,des,phone}) => {
  return (
    <>
      <div className='car-col'>
          <div className='car-img'> <h2> : نظرات کاربران</h2></div>
          <div className='car-title'><p>{des}</p> </div>
      </div>
      
    </>
  )
}

export default NazaratItem