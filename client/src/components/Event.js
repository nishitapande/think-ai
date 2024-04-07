import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Event = ({ events, text }) => {
  return (
    <div>
      <h2>{text === "upcomming" ? `Upcomming Events` : `Past Events`}</h2>
      {events.length === 0 ? (
        <span>Sorry No current events</span>
      ) : (
        <Row>
          {events.map((event) => {
            return (
              <Col>
                <Card className="event-card">
                  <Card.Img
                    variant="top"
                    src={event.coverImg}
                    alt={`${event.title}`}
                  />
                  <Card.Body style={{ padding: 0 }}>
                    <h3 className="text-center">{event.title}</h3>
                    <Card.Text>{event.description}</Card.Text>
                    {text === "upcomming" ? (
                      <a href={event.registerLink} target="_blank">
                        <Button variant="primary">Register</Button>
                      </a>
                    ) : (
                      <h2>no button</h2>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Event;
