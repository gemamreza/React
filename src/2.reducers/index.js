import { combineReducers } from 'redux' // combinereducers untuk menggabungkan banyak globalstate dalam satu index.js
import UserState from './userGlobal';
import ProductState from './productGlobal';
import CountWords from './countWordsGlobal';


export default combineReducers({
    user : UserState,
    product : ProductState,
    jumlah : CountWords
})