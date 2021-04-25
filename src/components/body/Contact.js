import React, { Component } from 'react';
import { FormGroup, Col, Label, Button, Alert } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseURL } from '../../redux/baseUrl';

const mapDispatchToProps = (dispatch) => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertType: null,
        alertText: null
    }

    submitHandler = (values) => {
        //console.log(values);
        axios.post("/insert.php", values)
            .then(response => response.data)
            .then(data => {
                if (data.result === 'Success') {
                    this.setState({
                        alertShow: true,
                        alertType: "success",
                        alertText: data.response
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
        this.props.resetFeedbackForm();
    }
    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-6">
                        <Alert
                            isOpen={this.state.alertShow}
                            color={this.state.alertType}>
                            {this.state.alertText}
                        </Alert>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="feedback" onSubmit={(values) => this.submitHandler(values)} >
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "This field is required."
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        messages={
                                            {
                                                required: "This field is required."
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telNum"
                                        name="telNum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telNum"
                                        show="touched"
                                        messages={
                                            {
                                                required: "This field is required!,",
                                                isNumber: "This is not a number!"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={
                                            {
                                                required: "This field is required!,",
                                                validEmail: "This is not a valid email!"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        name="message"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={
                                            {
                                                required: "This field is required!,"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
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

export default connect(null, mapDispatchToProps)(Contact);