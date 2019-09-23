import React from 'react';
import ListItem from './listItem';
import { shallow } from 'enzyme';
import { findElementByTestAttr } from '../../../utilities';

describe('ListItem', () => {
    let mockProps;
    let testListItem;

    beforeEach(() => {
        mockProps = {
            item: {
                name: 'mock name',
                version: 'mock version',
                info: 'mock info',
                downloads: 'mock downloads',
                sha: 'mock sha'
            },
            haveItem: true,
            handleAdd: jest.fn(),
            handleRemove: jest.fn()
        }

        testListItem = shallow(<ListItem {...mockProps} />);
    });

    const overrideMockProps = (mockPropsKey, value) => {
        mockProps[mockPropsKey] = value;
        testListItem = shallow(<ListItem {...mockProps} />);
    }
    
    it('renders successfully', () => {
        expect(testListItem.exists()).toBe(true);
    })

    it('renders received name prop', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-name');
        expect(element.text()).toBe(mockProps.item.name);
    })

    it('renders received version prop', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-version');
        expect(element.text()).toBe(mockProps.item.version);
    })

    it('renders received info prop', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-info');
        const truncatedInfo = `${mockProps.item.info.substring(0, 120)}...`;
        
        expect(element.text()).toBe(truncatedInfo);
    })

    it('renders received downloads prop', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-downloads');
        
        expect(element.text()).toBe(mockProps.item.downloads);
    })

    it('renders remove button if we have item stored', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-remove-button');

        expect(element.exists()).toBe(true);
    })

    it('renders save button if we do not have item stored', () => {
        overrideMockProps('haveItem', false);
        const element = findElementByTestAttr(testListItem, 'list-item-save-button');

        expect(element.exists()).toBe(true);
    })

    it('does not render remove button if we do not have item stored', () => {
        overrideMockProps('haveItem', false);
        const element = findElementByTestAttr(testListItem, 'list-item-remove-button');

        expect(element.exists()).toBe(false);
    })

    it('does not render save button if we have item stored', () => {
        const element = findElementByTestAttr(testListItem, 'list-item-save-button');

        expect(element.exists()).toBe(false);
    })
})