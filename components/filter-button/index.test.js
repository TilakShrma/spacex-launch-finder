import React from 'react';
import {shallow} from 'enzyme';

import FilterButton from './index';
import { iteratee } from 'lodash';

const defaultProps = {
    value: 2001,
    filterLaunches: jest.fn(),
    filterKey: 'year'
};

const setup = (options = {}) => {
    const props = {
        ...defaultProps,
        ...options
    };

    const wrapper = shallow(<FilterButton {...props} />);

    return {wrapper, props};
};

describe('<FilterButton />', () => {
    it('renders', () => {
        const {wrapper} = setup();
        expect(wrapper.find('button.filterBtn')).toHaveLength(1);
    });
});