import {SET_BALANCE,DEPOSIT,WITHDRAW} from './constants'

export const setBalance = (balance)=>{
    return {
        type:SET_BALANCE,
        payload:balance
    }
}

export const deposit = (deposit)=>{
    return{
        type:DEPOSIT,
        payload:deposit
    }
}

export const withDraw = (withdraw)=>{
        return{
            type:WITHDRAW,
            payload:withdraw
        }
}