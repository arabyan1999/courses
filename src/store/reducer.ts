import { ADD_CATEGORIES, ADD_DATA } from './action'

let globalState: object = {
    cats: [],
    categories: []
}

export default function reducer(state = globalState, action: any) {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                categories: action.data
            }
        case ADD_DATA:
            return {
                ...state,
                cats: action.catData
            }
        default:
            return state;
    }
}

