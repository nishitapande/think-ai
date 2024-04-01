import React from "react";
import TeamMember from "./TeamMember";

const Team = (props) => {
  const members = props.members;
  return (
    <div>
      <div style={{ margin: "0 12rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridAutoColumns: "true",
            overflow: "hidden",
          }}
        >
          {members.map((member) => {
            return (
              <div key={member.id}>
                <TeamMember member={member} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
