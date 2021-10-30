import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import Wallet from './Wallet'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Wallet/>);

describe('Name of the group', () => {
    it('should render wallet properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});