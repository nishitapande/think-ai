import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const EventCard = (props) => {
  const event = props.event;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={event.img}
          style={{ height: "15rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title> {event.title} </Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Link to={event.register}>
            <Button variant="primary">Register</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventCard;
