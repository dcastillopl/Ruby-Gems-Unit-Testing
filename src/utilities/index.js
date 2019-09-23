import configureStore from 'redux-mock-store';

export const createMockStore = initialState => {
    const storeConfig = configureStore();
    const mockStore = storeConfig(initialState);

    return mockStore
}

export const findElementByTestAttr = (component, attr) => {
    const foundElement = component.find(`[data-test='${attr}']`);
    
    return foundElement;
};