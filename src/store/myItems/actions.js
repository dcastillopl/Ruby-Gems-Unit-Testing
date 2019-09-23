import { GET_ITEMS } from './types';

//Action Creators
const getItems = items => ({
    type: GET_ITEMS,
    items
})

//Thunk Creators
export const putItem = item =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('testRubyGems'));

        if (storageData) {
            const { myItems } = storageData.testRubyGems

            if (myItems.every(currItem => currItem.sha !== item.sha)) {
                let storageObj = {
                    testRubyGems: {
                        myItems: [...myItems, item]
                    }
                }

                localStorage.setItem('testRubyGems', JSON.stringify(storageObj))
                dispatch(fetchItems());
            }
        } else {
            let storageObj = {
                testRubyGems: {
                    myItems: [item]
                }
            }

            localStorage.setItem('testRubyGems', JSON.stringify(storageObj));
            dispatch(fetchItems());
        }

    }

export const deleteItem = id =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('testRubyGems'));
        let { myItems } = storageData.testRubyGems
        myItems = myItems.filter(item => item.sha !== id);

        let storageObj = {
            testRubyGems: {
                myItems: [...myItems]
            }
        }

        localStorage.setItem('testRubyGems', JSON.stringify(storageObj));
        dispatch(fetchItems());
    }

export const fetchItems = () =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('testRubyGems'));

        if (storageData) {
            const { myItems } = storageData.testRubyGems;

            dispatch(getItems(myItems))
        }
    }