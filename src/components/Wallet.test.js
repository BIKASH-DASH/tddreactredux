import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import {Wallet} from './Wallet'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const mockDeposit = jest.fn();
const mockWithdraw = jest.fn();
const props = {
    balance:20,
    deposit:mockDeposit,
    withdraw:mockWithdraw
}
const wrapper = shallow(<Wallet {...props}/>);

describe('Wallet', () => {
  
    describe('when init', () => {
        it('should render wallet properly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    
        it('should display balance from props', () => {
            expect(wrapper.find('.balance').text()).toEqual(`${props.balance}`)
        });
    
        it('should create an input deposit and withdraw from balance', () => {
            expect(wrapper.find('.input-wallet').exists()).toBe(true);
        });
    });

    describe('when user types into input wallet', () => {
        const userBalance = '25';

        beforeEach(()=>{
            wrapper.find('.input-wallet').simulate('change',{target:{value:userBalance}});

        })

        it('should update the balance to state and convert text to number  ', () => {
            expect(wrapper.state().balance).toEqual(parseInt(userBalance,10));
        });
        describe('when user deposit its balance', () => {
            beforeEach(()=>{
                wrapper.find('.button-deposit').simulate('click');
            })
    
            it('should dispatch `deposit()` it receive from local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance,10))
            });
        });

        describe('user wants to make a withdraw', () => {
            beforeEach(()=>{
                wrapper.find('.button-withdraw').simulate('click');
            })

            it('should  dispatch withdraw()', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance,0))
            });

        });
    });


    });


