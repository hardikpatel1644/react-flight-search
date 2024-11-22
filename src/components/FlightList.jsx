import { Container, List } from "@mui/material";
import React from "react";
import FlightListItem from "./FlightListItem";

const FlightList = ({ flights }) => {
  console.log("flights", flights);
  let content = <p>No flights found</p>;
  if (Object.keys(flights).length > 0 && flights.itineraries.length > 0) {
    content = (
      <>
        {flights.itineraries.map((flight) => (
          <FlightListItem flight={flight} key={flight.id} />
        ))}
      </>
    );
  }

  return (
    <>
      <Container maxWidth='sm'>
        <h1>Flight List</h1>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            border: "1px solid #",
            align: "center",
          }}
        >
          {content}
        </List>
      </Container>
    </>
  );
};

export default FlightList;
