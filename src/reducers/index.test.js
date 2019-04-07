import rootReducer from './index'
import * as actions from '../actions'

import { categories, category } from '../fixtures/fixtures'

describe('root reducer', () => {
    it('returns the initial state', () => {
        expect(rootReducer({}, {})).toEqual({categories: [], category: {}}) 
    })

    it('sets categories', () => {
        expect(rootReducer({}, {type: actions.SET_CATEGORIES, categories })).toEqual({categories, category: {}})
    })

    it('sets categories', () => {
        expect(rootReducer({}, {type: actions.PICK_CATEGORY, category })).toEqual({categories: [], category})
    })

})  