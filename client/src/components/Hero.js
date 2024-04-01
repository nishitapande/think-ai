import React from "react";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

const Hero = (props) => {
  return (
    <div
    className="banner"
      style={{
        zIndex: "-1",
        backgroundColor: "red",
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: "0"
      }}
    >
      <div>
        <Card
          style={{
            height: "100vh",
            margin: "0 12rem",
            border: "none",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Card.Img
              variant="top"
              src={props.img}
              style={{ width: "50%", height: "100%" }}
            />
            <Card.Body className="me-auto  ms-auto">{props.text}</Card.Body>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
