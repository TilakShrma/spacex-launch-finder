import React from 'react';
import { shallow } from 'enzyme'

const {FilterButton} = require('./index');

describe('<FilterButton />', () => {
    it('renders without any error', () => {
        const wrapper = shallow(<FilterButton />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders filter value correctly', () => {
        const wrapper = shallow(<FilterButton value='True'/>);
        expect(wrapper.text()).toEqual('True');
    });
});