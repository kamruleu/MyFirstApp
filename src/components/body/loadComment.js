import React from 'react';
import dateFormat from 'dateformat';
import Loading from './loading';

const LoadComment = (props) => {
    if (props.commentsIsLoading) {
        return <Loading />
    } else {
        return (
            props.comment.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p><strong>Rating:</strong> {comment.rating}</p>
                        <p>{comment.comment}</p>
                        <p>{dateFormat(comment.date, "ddd mmm dd yyyy HH:MM TT")}</p>
                    </div>
                )
            })
        )
    }

}

export default LoadComment;