import React, { useState, useEffect } from "react";
import Member from "../components/Member";
import { Row, Col } from "react-bootstrap";
//import teamMembers from "../data/teamdata";
import { baseURL } from "../utils";
import axios from "axios";
const TeamPage = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${baseURL}/api/team`);
      //console.log(response.data.teammembers);
      setMembers(response.data.teammembers);
    })();
  }, []);
  return (
    <div>
      <h2>Team members</h2>
      {/* <h2>Total Members: {members.length}</h2> */}
      <Row>
        {members.map((member) => {
          return (
            <Col key={member._id}>
              <Member member={member} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default TeamPage;
