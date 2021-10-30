import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<App/>);

describe('Name of the group', () => {
    
    it('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should contain a Wallet component', () => {
        expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
    });
});