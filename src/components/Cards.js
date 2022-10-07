import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        {props.children}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
