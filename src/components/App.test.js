import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

test('fff', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('h2').length).toBe(1)
})