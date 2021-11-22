import React, {Component} from 'react'
import StudentForm from '../StudentForm/StudentForm';
import classes from "./Select.module.css"
import { Link, Route } from 'react-router-dom';
import CounselForm from '../CounselForm/CounselForm';
import Nav from '../Nav'
import Footer from '../Footer'
import '../../App.css'

class Select extends Component{
   
    render(){
       

        
        return(
            <div className="container">
                 <Nav/>
            <div className={classes.select}>
                <Link className={classes.selectStu} to='/e/studentForm'>
                    <p >ثبت نام کاربر</p>
                  
                </Link>
                <Link className={classes.selectCouns} to='/e/counselForm'>

                    <p>ثبت نام مشاور</p>
                  
                </Link>

            </div>
            <Footer/>
            </div>
           
           
            )
    }
}
export default Select;