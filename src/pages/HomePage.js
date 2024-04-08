import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import { baseURL } from "../utils";
import axios from "axios";

const HomePage = () => {
  const [upcommimgEvent, setUpcommimgEvent] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${baseURL}/api/events`);
      console.log(response);
      const upcomming = response.data.filter(
        (event) => event.upcomming === true
      );
      setUpcommimgEvent(upcomming);
    })();
  }, []);
  return (
    <div>
      <Event events={upcommimgEvent} text={"upcomming"} />
    </div>
  );
};

export default HomePage;
