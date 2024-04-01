import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img from "../image.png";
const TeamMember = (props) => {
  const member = props.member;
  return (
    <div style={{}}>
      <div
        className="team-section"
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            zIndex: "-1",
            position: "absolute",
            width: "15rem",
            height: "9rem",
            marginTop: "5rem",
            marginLeft: ".5rem",
            borderRadius: "31% 69% 73% 27% / 35% 84% 16% 65% ",
            overflow: "hidden",
            background: "rgb(105,25,168)",
            background:
              "linear-gradient(27deg, rgba(105,25,168,1) 0%, rgba(134,20,165,1) 60%, rgba(185,11,160,1) 100%)",
          }}
        ></div>
        <img
          src={member.img}
          style={{
            zIndex: "2",
            display: "flex",
            margin: "0 2rem",
            width: "15rem",
            height: "15rem",
          }}
        />
        <div>
          <h3 style={{ marginLeft: "6rem" }}> {member.designation} </h3>
          <div style={{ marginLeft: "8rem" }}>
            <a href={member.github} style={{ textDecoration: "none" }}>
              <FaGithub
                style={{ width: "2rem", height: "1.5rem", cursor: "pointer" }}
              />
            </a>
            <a href={member.instagram}>
              <FaInstagram
                style={{ width: "2rem", height: "1.5rem", cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
