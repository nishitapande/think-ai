import React from "react";
import Card from "react-bootstrap/Card";

const Member = ({ teamMembers }) => {
  return (
    <div className="card">
      {teamMembers.map((teamMember) => {
        return (
          <Card className="team-card">
            <Card.Img
              variant="top"
              src={teamMember.src}
              alt={`${teamMember.name}`}
            />
            <Card.Body>
              <div className="text-center">
                <Card.Title
                  style={{
                    fontSize: "20px",
                    marginBottom: "5px",
                  }}
                  className="text"
                >
                  {teamMember.name}
                </Card.Title>
                <Card.Title
                  style={{
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                  className="text"
                >
                  {teamMember.position}
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
                <a href={teamMember.linkedIn}>
                  <i class="fa-brands fa-linkedin-in fa-lg"></i>
                </a>
                <a href={teamMember.instagram}>
                  <i class="fa-brands fa-instagram fa-lg"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Member;
