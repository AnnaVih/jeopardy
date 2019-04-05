import { SET_CATEGORIES } from '../actions/index';

function categories(state=[], actions) {
    switch(actions.type){
        case SET_CATEGORIES:
        return actions.categories;
        default:
        return state
    }
}

export default categories;