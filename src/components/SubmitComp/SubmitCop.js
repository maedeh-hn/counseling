import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './SubmitComp.module.css'
import Input from '../Input/Input'
import {Link} from 'react-router-dom';
import * as actions from '../store/action/index'
import StudentForm from '../StudentForm/StudentForm';


class SubmitCop extends Component{
    state = {
        controls: {
         
            number:{
               
                
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:' کد تایید 5 رقمی '
                },
                value:'',
                validation: {
                    required: true, //پر کردن فیلد اجباری است
                    minLength:5,
                    maxLength:5
                    },
                    touched:false,
                    valid: false,  //هر فیلد معتبر است یا نه
            }
    }
}
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if(rules.maxLength){
            isValid=value.length<=rules.maxLength && isValid
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
        this.props.onAuth( this.state.controls.number.value);
       
    }
    // changePage=()=>{
    //   this.props.history.push("/e")
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
            <form   onSubmit={this.submitHandler}>
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
                <button onClick={this.changePage} className={[classes.btnStyle].join(' ')} ><Link to="/e"> ادامه</Link></button>
               
            </form>
            
    )
     
        
        return(
           
           
            <div>
              
                {form}
                
          
            </div>
        )  
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(number )=>dispatch(actions.submit(number))
    }
}
export default connect(null,mapDispatchToProps) (SubmitCop);