import { FETCH_REQUEST, FETCH_DATA , FETCH_ERROR} from './productType'

const initialState={
loading:false,
data:[],
error:''
}

 const ProductReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_REQUEST: return{
            loading:true
                }
    case FETCH_DATA:return{
        loading:false,
        data: action.payload,
        error:''

    }
    case FETCH_ERROR:return{
        loadinf:false,
        data:[],
        error:action.payload
    }
    default: return state
            }
}

export default ProductReducer;