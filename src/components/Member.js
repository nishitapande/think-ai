import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Member = ({ member }) => {
  return (
    <Card className="team-card">
      <Card.Img variant="top" src={member.image} alt={`${member.name}`} />
      <Card.Body>
        <div className="text-center">
          <Card.Title
            style={{
              fontSize: "20px",
              marginBottom: "5px",
            }}
            className="text"
          >
            {member.name}
          </Card.Title>
          <Card.Title
            style={{
              fontSize: "15px",
              marginBottom: "10px",
            }}
            className="text"
          >
            {member.position}
          </Card.Title>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="social-icons"
        >
          <a href={member.linkedIn}>
            <i class="fa-brands fa-linkedin-in fa-lg"></i>
          </a>
          <a href={member.instagram} target="_blank">
            <i class="fa-brands fa-instagram fa-lg"></i>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Member;
