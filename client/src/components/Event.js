import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Event = ({ events, text }) => {
  return (
    <div>
      <h3>{text === "upcomming" ? `Upcomming Events` : `Past Events`}</h3>
      {events.length === 0 ? (
        <span>Soory No current events</span>
      ) : (
        <div className="card">
          {events.map((event) => {
            return (
              <Card className="event-card">
                <Card.Img variant="top" src={event.img} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Register</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Event;
