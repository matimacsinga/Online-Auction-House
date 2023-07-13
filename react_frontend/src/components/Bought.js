import React from "react";
import { Card } from "react-bootstrap";

function Bought({bought}) {

    return(
        <Card>
            <Card.Body>
                <Card.Img src={require(`../images/${bought['Image']}`)} />
                <Card.Title>{bought['Name']}</Card.Title>
                <Card.Text>Bought For: {bought['BoughtPrice']}</Card.Text>
            </Card.Body>
        </Card>
    )    
}

export default Bought