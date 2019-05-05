import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import PortfolioCard from "../PortfolioCard";

class PortfolioCardGroup extends Component {

    render() {
        return (
            <CardGroup>
                <PortfolioCard
                image="https://i.imgur.com/GJ1Jvbq.png"
                title="Sample Project"
                summary="This is a sample Project Card" />
            </CardGroup>
        )
    }

};

export default PortfolioCardGroup;

