import { FETCH_REQUEST, FETCH_DATA , FETCH_ERROR} from './productType'
import axios from 'axios'

const fetchRequest= () =>{
    return{
        type:FETCH_REQUEST
    }
}
const fetchData= data =>{
    return{
        type: FETCH_DATA,
        payload :data
    }
}
const fetchError = error =>{
    return{
        type: FETCH_ERROR,
        payload:error
    }
}

export const fetch=()=>{
    return (dispatch)=>{
dispatch(fetchRequest())
axios.get('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
.then(response=>{
    const product=response.data
    dispatch(fetchData(product))
})
.catch(error=>{
    const errorMsg=error.message
    dispatch(fetchError(errorMsg))
})
    }
}