import * as actionTypes from './actionTypes'
import axios from 'axios'




export const stuFormSuccess=(id,orderData)=>{
    return{
        
        type: actionTypes.STUFORM_SUCCESS,
        orderId: id,
        orderData: orderData,
       
}
}

export const stuFormFail=(error)=>{
    return{
        type:actionTypes.STUFORM_FAIL,
        error:error
    }
}
export const stuFormStart=()=>{
    return{
        type: actionTypes.STUFORM_START
    }
}


export const stuForm = ( stuFormData, history ) => {
    return dispatch => {
        dispatch(stuFormStart() );
        axios.post( '/orders.json', stuFormData)
            .then( response => {
                console.log( response.data );
                
                dispatch( stuFormSuccess( response.data.name, stuFormData) );
            } )
            .catch( error => {
                dispatch( stuFormFail( error ) );
            } );
    };
};