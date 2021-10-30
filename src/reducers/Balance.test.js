import {BalanceReducer} from './Balance';
import * as constants from '../actions/constants'

describe('balance Reducer', () => {
    
    it('should have balance', () => {
        const balance = 10;
        expect(BalanceReducer(undefined,{type:constants.SET_BALANCE,payload:balance})).toEqual(balance);
    });

    it('should return state if action is empty', () => {
        const balance = 10;
        expect(BalanceReducer(undefined,{type:'',payload:balance})).toEqual(0);
    });

    it('should deposit the balance', () => {
        const deposit = 10;
        const initState = 5;
        expect(BalanceReducer(initState,{type:constants.DEPOSIT,payload:deposit})).toEqual(deposit+initState)
    });

    it('should with draw balance', () => {
        const balance = 30;
        const withDrawBalance =5;
        expect(BalanceReducer(balance,{type:constants.WITHDRAW,payload:withDrawBalance})).toEqual(balance-withDrawBalance)
    });

  
});