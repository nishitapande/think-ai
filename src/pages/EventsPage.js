import React, { useState, useEffect } from "react";
import Event from "../components/Event";

import axios from "axios";
const EventsPage = () => {
  const [upcommimgEvent, setUpcommimgEvent] = useState([]);
  const [pastEvent, setPastEvent] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("${baseURL}/api/events");
      const upcomming = response.data.filter(
        (event) => event.upcomming === true
      );
      setUpcommimgEvent(upcomming);
      const pastEventData = response.data.filter(
        (event) => event.upcomming === false
      );
      setPastEvent(pastEventData);
    })();
  }, []);
  return (
    <div>
      <Event events={upcommimgEvent} text={"upcomming"} />

      <Event events={pastEvent} text={"past"} />
    </div>
  );
};

export default EventsPage;
