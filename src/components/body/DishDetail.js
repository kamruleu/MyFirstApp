import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import LoadComment from './loadComment';
import CommentForm from './commentForm';
import { baseURL } from '../../redux/baseUrl';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseURL + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price}/-</CardText>
                    <hr />
                    <LoadComment comment={props.comments} commentsIsLoading={props.commentsIsLoading} />
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;