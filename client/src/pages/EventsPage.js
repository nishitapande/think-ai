import React from "react";
import Event from "../components/Event";
import events from "../data/eventData";
const EventsPage = () => {
  return (
    <div>
      <h2>Events Page</h2>
      <Event events={events} text={"upcomming"} />
      <Event events={events} text={"past"} />
    </div>
  );
};

export default EventsPage;
