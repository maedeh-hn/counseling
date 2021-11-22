import classes from './StudentForm.module.css';
import React, {Component} from 'react'
import Nav from '../Nav';
import axios from "axios";
import Footer from '../Footer';
import Input from '../Input/Input';


class StudentForm extends Component{
state={
    controls:{
        
        name:{
            label:'    نام',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'نام '
            },
            value:'',
            touched:false,
            validation: {
                required: true, //پر کردن فیلد اجباری است
                minLength:5,
                maxLemgth:10
                },
                touched:false,
                valid: false,  //هر فیلد معتبر است یا نه
        },
        fName:{
            label:'نام خانوادگی',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'نام خانوادگی '
            },
            value:'',
            touched:false,
            validation: {
                required: true,     
                },
                touched:false,
                valid: false,       
        },
        userNam:{
            label:' نام کاربری',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'نام + نام خانوادگی '
            },
            value:'',
            touched:false,
            validation: {
                required: true, 
                },
                touched:false,
                valid: false,       
        },
        idCardNum:{
            label:'کد ملی',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:' کد ملی   '
            },
            value:'',
            validation: {
                required: true,    
                minLength:10,
                maxLength:10
                },
                touched:false,
                valid: false,  
        },
        brithDate:{
            label:'تاریخ تولد',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:' سال تولد   '
            },
            value:'',
            validation: {
                required: true,    
                minLength:10,
                maxLength:10
                },
                touched:false,
                valid: false,  
        },
        address:{
            label:'آدرس سکونت',
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'آدرس'
            },
            value:'',
            validation: {
                required: true
                },
                touched:false,
                valid: false  
        },
        
    },
    formIsValid: false,
    selectedFile:null
   
}







    checkValidity(value,rules){
        let isValid=true;

        if(rules.required){
            isValid=value.trim() !== '' && isValid //اگر عبارت سمت راست صحیح بود عبارت سمت چپ را صحیح کن
        }
        if(rules.minLength){
          isValid=value.length>=rules.minLength && isValid
        }
        if(rules.maxLemgth){
            isValid=value.length<=rules.maxLemgth && isValid
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
    const  data={
            name:this.state.controls.name.value,
            fName:this.state.controls.fName.value,
            userNam:this.state.controls.userNam.value,
            idCardNum:this.state.controls.idCardNum.value,
            brithDate:this.state.controls.brithDate.value,
            address:this.state.controls.address.value,
           

        }
       
        axios.post('https://jsonplaceholder.typicode.com/posts ', data)
        .then(response => {
            console.log(response.data);
           
          
        })
        .catch(err => {
            console.log(err);
           
        });
        

    }
    uploadHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.selectedFile)
      }
      fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }


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
               <div className={classes.formDiv}>
               <div><label>عکس پروفایل</label> <input type="file" className={classes.upload} onChange={this.fileChangedHandler}/>
                <button onClick={this.uploadHandler}>آپلود کنید!</button></div>
                <button className={classes.btnStyle} >تایید و ثبت اطلاعات   </button>
                </div>
            </form>
            
            
    )
    
    //  console.log(this.props.error)
        
        return(
            <div>
                <Nav/>
                <div className={classes.formStudent} >
             
                    {form}
            
                </div>
                <Footer/>
            </div>
           
            
        )  
    }
}


export default  StudentForm;