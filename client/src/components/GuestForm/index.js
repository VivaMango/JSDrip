import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import API from "../../utils/API";

class GuestForm extends Component {

    consoleLogger = event => {
        event.preventDefault();

        let name = this.refs.nameForm.value
        let contact = this.refs.contactForm.value
        let message = this.refs.messageForm.value

        console.log ({
            name: name,
            contact: contact,
            message: message})
    }

    createLog = _=> {
        API.createLog({
            name: this.refs.nameForm.value,
            contact: this.refs.contactForm.value,
            message: this.refs.messageForm.value
        }).then(res => {
            console.log(res.data);
        }).catch(err => console.log(err));
    };

    handleCreateLog = event => {
        event.preventDefault();

        this.createLog();
        console.log("Log Created")
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Sign your name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" ref="nameForm"/>
                </Form.Group>
                <Form.Group controlId="formContact">
                    <Form.Label>How should I keep in touch with you?</Form.Label>
                    <Form.Control type="text" placeholder="Your Preferred Contact Method" ref="contactForm"/>
                </Form.Group>
                <Form.Group controlId="formMessage">
                <Form.Label>Leave a message from Google I/O 2019!</Form.Label>
                <Form.Control as="textarea" rows="3" ref="messageForm"/>
                </Form.Group>
                <Button onClick={this.handleCreateLog} variant="primary" type="submit">
                    Sign Guest Log
                </Button>
            </Form>
        )
    };
};

export default GuestForm;