import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

const Event = ({ events, text }) => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
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
                    <h4 className="text-center">{event.title}</h4>
                    <Card.Text className="card-text">
                      {showMore
                        ? `${event.description}`
                        : `${`${event.description}`.substring(0, 90)}`}
                      <button
                        onClick={() => {
                          setShowMore(!showMore);
                          setShowMoreText(!showMoreText);
                        }}
                        className="card-button"
                      >
                        <u>Show {showMoreText ? `less` : `more`}</u>
                      </button>
                    </Card.Text>
                    {text === "upcomming" ? (
                      <a href={event.registerLink} target="_blank">
                        <Button
                          variant="primary"
                          className="event-card-button "
                        >
                          Register
                        </Button>
                      </a>
                    ) : (
                      <h6> Date will come </h6>
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
