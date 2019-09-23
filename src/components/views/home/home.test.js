import React from 'react';
import Home from './home';
import { shallow } from 'enzyme';
import { createMockStore } from '../../../utilities';

describe('Home', () => {
    const initialState = {

    }
    let mockStore, testHome;

    beforeEach(() => {
        mockStore = createMockStore(initialState);
        testHome = shallow(<Home store={mockStore} />);
    })
    
    it('renders without crashing', () => {
        expect(testHome.exists()).toBe(true);
    })
})