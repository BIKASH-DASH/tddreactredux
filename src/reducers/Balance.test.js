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
});