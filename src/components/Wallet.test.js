import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import {Wallet} from './Wallet'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const props = {
    balance:20
}
const wrapper = shallow(<Wallet {...props}/>);

describe('Name of the group', () => {
    it('should render wallet properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display balance from props', () => {
        expect(wrapper.find('.balance').text()).toEqual(`${props.balance}`)
    });
});