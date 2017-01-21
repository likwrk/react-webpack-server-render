import {createStore} from 'redux';

const items = (items = ['sdfdsfa', 'sadfasdf'], action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...items, action.item];
		case 'EDIT_ITEM':
			return [...items.slice(0, action.index), action.value, ...items.slice(action.index+1)]
		default:
			return items;
	}
};
const store = createStore(items);

export default store;