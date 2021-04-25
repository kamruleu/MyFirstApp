import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        //console.log(this.state);
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
        event.preventDefault();
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.inputHandler}
                        required />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.inputHandler}
                        required >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.inputHandler}
                        required />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default CommentForm;