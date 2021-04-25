import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { initialContactForm } from './forms';
import { createForms } from 'react-redux-form';

const dishReducer = (dishState = { isLoading: false, dishes: [], errMessage: null }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                errMessage: null,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                errMessage: null,
                dishes: action.payload
            }
            case actionTypes.DISHES_FAILED:
                return{
                    ...dishState,
                    isLoading: false,
                    errMessage: action.payload,
                    dishes: []
                }
        default:
            return dishState;
    }
}

const commentReducer = (commentState = { isLoading: false, comments: [] }, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            }
        case actionTypes.ADD_COMMENT:
            const comment = action.payload;
            return {
                ...commentState,
                comments: commentState.comments.concat(comment)
            }
        default:
            return commentState;
    }
}
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: initialContactForm
    })
});