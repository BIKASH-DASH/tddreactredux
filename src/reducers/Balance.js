import {SET_BALANCE,DEPOSIT,WITHDRAW} from '../actions/constants'
import {read_cookie,bake_cookie} from 'sfcookies'
const BALANCE_COOKIE ='BALANCE_COOKIE'

export const BalanceReducer = (state=0,actions)=>{
    let balance; 
    switch (actions.type) {
        case SET_BALANCE:
            balance = actions.payload;
            break;
        case DEPOSIT:
            balance = state+actions.payload;
            break;
        case WITHDRAW:
            balance = state-actions.payload;
            break;
    
        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE),10) || state;
            break;
    }
    bake_cookie(BALANCE_COOKIE,balance)
    return balance ;
}