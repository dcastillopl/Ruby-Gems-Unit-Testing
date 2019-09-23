import React from 'react';
import List from './list';
import { shallow } from 'enzyme';
import { createMockStore } from '../../../utilities';

describe('List', () => {
    const initialState = {

    }
    let mockStore, testList;

    beforeEach(() => {
        mockStore = createMockStore(initialState);
        testList = shallow(<List store={mockStore} />);
    })

    it('renders successfully', () => {
        expect(testList.exists()).toBe(true);
    })
})