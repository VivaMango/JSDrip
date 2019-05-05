import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class GuestForm extends Component {

    render() {
        return (
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Sign your name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="formContact">
                    <Form.Label>How should I keep in touch with you?</Form.Label>
                    <Form.Control type="text" placeholder="Your Preferred Contact Method" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                <Form.Label>Leave a message from Google I/O 2019!</Form.Label>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Guest Log
                </Button>
            </Form>
        )
    };
};

export default GuestForm;