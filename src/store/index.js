import {configureStore} from '@reduxjs/toolkit' 
import lesson from '../feature/Home/reducer'

export default  configureStore({
    reducer:{
        lesson
    }
})