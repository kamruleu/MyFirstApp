import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseURL } from './baseUrl';

export const addComment = (dishId, author, rating, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    
    axios.post(baseURL + "comments", newComment)
    .then(response => response.data)
    .then(comment => dispatch(commentConcate(comment)))
}

export const commentConcate = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const loadDishes = (dishes) => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const dishesFailed = (errMessage) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMessage
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        // setTimeout(()=>{
        //     dispatch(loadDishes(DISHES))
        // }, 2000);

        axios.get(baseURL + "dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
        
    }
}

export const loadComments = (comments) => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})

export const commentsLoading = () => ({
    type: actionTypes.COMMENTS_LOADING
})

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentsLoading());

        axios.get(baseURL + "comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
    }
}