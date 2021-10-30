import {SET_BALANCE,DEPOSIT,WITHDRAW} from '../actions/constants'

export const BalanceReducer = (state=0,actions)=>{
    switch (actions.type) {
        case SET_BALANCE:
            return actions.payload
        case DEPOSIT:
            return state+actions.payload
        case WITHDRAW:
            return state-actions.payload
    
        default:
            return state;
            
    }
}