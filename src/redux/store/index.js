import { createStore } from 'redux';

function mockReducer() {

}

const store = createStore(mockReducer);
//  dev mode
window.store = store;

export default store;

