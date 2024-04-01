import React from "react";
import Event from "../components/Event";
import events from "../data/eventData";
const HomePage = () => {
  return (
    <div>
      <Event events={events} text={"upcomming"} />
    </div>
  );
};

export default HomePage;
