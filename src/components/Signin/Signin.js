import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './Signin.module.css'
import Input from '../Input/Input'

import * as actions from '../store/action/index'
import Modal from '../Modal/Modal'
import SubmitCop from '../SubmitComp/SubmitCop'



class Signin extends Component{
    state = {
        controls: {
            email: {
               
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'ایمیل '
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            
           
            
            
        },
        continue:false
       
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
     
        
        
        return isValid;
    }
    inputHandler = (event, controlName) =>{
        const updatedControls = {
            ...this.state.controls,
            [controlName]:{
                ...this.state.controls[controlName],
                value: event.target.value,
                
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
       
        this.setState({controls: updatedControls})
        // if(this.state.controls.password.value = this.state.controls.repPassword.value){
        //     this.state.controls.passvalid=true
        // }
    }
   
    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value);
        this.setState(prevState=>{
            return{continue:!prevState.continue}
        })

    }
    // switchAuthModeHandler=()=>{
    //     this.setState(prevState=>{
    //         return{isSignUp:!prevState.isSignUp}
    //     })
    // }


    render(){
        
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        
        
        let form=(
            <form  onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement=>{
                    return<Input
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    label={formElement.config.label}
                    key={formElement.id}
                    inValid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    shouldValidate={formElement.config.validation}
                    changed={(event)=>this.inputHandler(event, formElement.id)}
                    
                    />
                })}
                {/* <Button  btnType="btn-success ml-auto mr-auto mb-5">ورود</Button> */}
                <button className={classes.btnStyle} >تایید  </button>
                
            </form>
            
            
    )
    if(this.state.continue){
        form=( <SubmitCop/>)
    }
    //  console.log(this.props.error)
        
        return(
           
            <div>
               <h5 >{this.state.continue?'کد تایید 5 رقمی ارسال شده به ایمیل تان را وارد کنید':'ایمیل خودتان را وارد کنید'}  </h5>
                {form}
               
            </div>
        )  
    }
}
const mapStateToProps=state=>{
    return{
        error: state.error
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(email )=>dispatch(actions.signIn(email))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Signin);