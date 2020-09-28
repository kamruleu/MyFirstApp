import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{marginTop: "10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText style={{textAlign: "left"}}>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;