import React, { useState } from 'react'

import Modal from '../Modal/Modal'

import classes from './LogIn.module.css'



const LogIn =(props)=>{
    const [showModal,setShowModal]=useState(false);
    const cancelModalHandler=()=>{
        setShowModal(!showModal)
    }
    const submitModalHandler=()=>{
        setShowModal(!showModal)
    }
    return(
        <div>
            <div className={classes.LogIn}>
                {/* <NavLink to="/" className={classes.HeaderNav}>
                    
                     </NavLink> */}
                     <button className={ classes.signUpBt} onClick={()=>setShowModal(!showModal)}>
                      ورود / ثبت نام</button>
                         <Modal
                         onSubmit={submitModalHandler}
                         onCancel={cancelModalHandler}
                         show={showModal}
                         />
            </div>

        </div>
    )
}
export default LogIn