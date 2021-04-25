import React, { Component } from 'react';
import { Form, FormGroup, Col, Label, Input, Button } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    submitHandler = (event) => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.submitHandler} >
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    value={this.state.firstName}
                                    onChange={this.inputHandler}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={this.state.lastName}
                                    onChange={this.inputHandler}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Input 
                                    type="text" 
                                    name="telNum" 
                                    placeholder="Tel. Number" 
                                    value={this.state.telNum}
                                    onChange={this.inputHandler}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.state.email}
                                    onChange={this.inputHandler}
                                     />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                            type="checkbox" 
                                            name="agree" 
                                            checked={this.state.agree}
                                            onChange={this.inputHandler}
                                             />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input 
                                    type="select" 
                                    name="contactType" 
                                    value={this.state.contactType}
                                    onChange={this.inputHandler}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input 
                                    type="textarea" 
                                    name="message" 
                                    value={this.state.message} 
                                    rows="12" 
                                    onChange={this.inputHandler}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2}}>
                                    <Button 
                                    type="submit" 
                                    color="primary"
                                    >
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;