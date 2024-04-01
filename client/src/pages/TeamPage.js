import React from "react";
import Member from "../components/Member"
import teamMembers from "../data/teamdata";
const TeamPage = () => {
  return (
    <div>
      <h2>Team members</h2>
      <Member teamMembers={teamMembers} />
    </div>
  );
};

export default TeamPage;
