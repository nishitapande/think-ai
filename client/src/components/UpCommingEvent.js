import React from "react";
import EventCard from "./EventCard";

const UpCommingEvent = (props) => {
  const events = props.events;
  return (
    <div>
      <div
        style={{
          margin: "2rem 12rem",
          zIndex: "2",
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          top: "40rem"
        }}
      >
        <h2 style={{ marginTop: "2rem", textAlign: "center" }}>
          Upcomming Events
        </h2>
        <div>
          {events.map((event) => {
            return (
              <div
                key={event._id}
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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

export default UpCommingEvent;
