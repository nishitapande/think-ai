import React from "react";
import UpCommingEvent from "../components/UpCommingEvent";
import { upCommingEvents, pastEvents } from "../data";
import PastEvents from "../components/PastEvents";
const EventPage = () => {
  return (
    <div>
      <UpCommingEvent events={upCommingEvents} />
      <PastEvents events={pastEvents} />
    </div>
  );
};

export default EventPage;
