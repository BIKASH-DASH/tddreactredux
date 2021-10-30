import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import * as constants from './constants'
import * as actions from './Balance'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('should create an action set the balance', () => {
    const balance = 0 ;
    const expectedAction = {type:constants.SET_BALANCE,payload:balance}
    expect(actions.setBalance(balance) ).toEqual(expectedAction)
});