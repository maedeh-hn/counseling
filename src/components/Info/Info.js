import React, {Component} from 'react'
import classes from "./Info.module.css"

class Info extends Component{

    render(){

        
        return(
            
            
        <div className={classes.Info}>
           
              <h1 style={{textAlign:"right"}}>چرا مشاوره با ما؟</h1>
            <div className={classes.infoContainer}>
                <div className={classes.InfoDatailes}>
                    <h3>
                        ارتباط فوری با مشاوران
                    </h3>
                    <h5 className={classes.infoH5}>
                    در کمترین زمان با مشاوران متخصص ما ارتباط برقرار کنید
                    </h5>

                </div>
                <div className={classes.InfoDatailes}>
                <h3>
                        کسب اطلاعات در رابطه با مشکلات درسی
                </h3>
                <h5 className={classes.infoH5}>
                    در کمترین زمان با مشاوران متخصص ما ارتباط برقرار کنید
                    </h5>
                </div>
                <div className={classes.InfoDatailes}>
                <h3>
                        تضمین بازگشت 100% وجه
                </h3>
                <h5 className={classes.infoH5}>
                    در کمترین زمان با مشاوران متخصص ما ارتباط برقرار کنید
                    </h5>
                </div>
                <div className={classes.InfoDatailes}>
                <h3>
                        ارتباط با مشاور اختصاصی خود
                </h3>
                <h5 className={classes.infoH5}>
                    در کمترین زمان با مشاوران متخصص ما ارتباط برقرار کنید
                    </h5>
                </div>

            </div>
        </div>
            )
    }
}
export default Info;