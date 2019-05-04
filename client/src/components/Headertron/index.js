import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';


const Headertron = props => (
    <Container>
        <Jumbotron>
            <h1>Welcome to JSDrip!</h1>
            <p>The Personal Blog and Portfolio of Alex Schwartz</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    </Container>
);

export default Headertron;


