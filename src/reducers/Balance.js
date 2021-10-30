import {SET_BALANCE} from '../actions/constants'

export const BalanceReducer = (state=0,actions)=>{
    switch (actions.type) {
        case SET_BALANCE:
            return actions.payload
            
    
        default:
            return state;
            
    }
}