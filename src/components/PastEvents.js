import React from "react";
import EventCard from "./EventCard";

const PastEvents = (props) => {
  const events = props.events;
  return (
    <div>
      <div
        style={{
          margin: "2rem 12rem",
          backgroundColor: "red",
        }}
      >
        <h2 style={{ marginTop: "2rem", textAlign: "center" }}>Past Events</h2>
        <div>
          {events.map((event) => {
            return (
              <div
                key={event._id}
                style={{
                  marginTop: "2rem",
                  display: "grid",
                  gridTemplateColumns: " 1fr 1fr",
                }}
              >
                <EventCard event={event} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
