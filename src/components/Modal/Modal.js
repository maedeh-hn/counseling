
import Signin from '../Signin/Signin'
import classes from './Modal.module.css'

const Modal=(props)=>{
    return(
        
        <div >
            {props.show && <div className={classes.backDrop} onClick={props.onCancel}></div>}
            <div 
            className={classes.modal}
            style={{
                transform:props.show ? "translateY(0)":"translateY(-100vh)",
                opacity:props.show ? "1":"0",
            }}>
                <div>
                
                </div>
                <div className={classes.signDiv} >
                    <div className={classes.signForm}>
                       
                        <Signin/>
                    </div>
                   
                </div>
               
            </div>
        </div>
    )
}
export default Modal