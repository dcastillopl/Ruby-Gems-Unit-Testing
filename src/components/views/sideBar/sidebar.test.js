import React from 'react';
import SideBar from './sideBar';
import { shallow } from 'enzyme';
import { createMockStore } from '../../../utilities';

describe('SideBar', () => {
    const initialState = {

    }
    let mockStore, testSideBar;

    beforeEach(() => {
        mockStore = createMockStore(initialState);
        testSideBar = shallow(<SideBar store={mockStore} />);
    })

    it('renders successfully', () => {
        expect(testSideBar.exists()).toBe(true);
    })
})