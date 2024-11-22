import {
  formatMinutes,
  getDisplayDATime,
  getLegsData,
} from "../utils/functions";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
export default function FlightListItem({ flight }) {
  return (
    <>
      <ListItem alignItems='flex-start' key={flight.id}>
        <ListItemAvatar>
          <Avatar
            alt={getLegsData(flight, "carriers", "marketing", "name")}
            src={getLegsData(flight, "carriers", "marketing", "logoUrl")}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            getDisplayDATime(getLegsData(flight, "departure")) +
            " - " +
            getDisplayDATime(getLegsData(flight, "arrival"))
          }
          secondary={getLegsData(flight, "carriers", "marketing", "name")}
        />
        <ListItemText
          primary={
            formatMinutes(getLegsData(flight, "durationInMinutes")) +
            " - (hh.mm)"
          }
          secondary={
            getLegsData(flight, "origin", "id") +
            "-" +
            getLegsData(flight, "destination", "id")
          }
        />
        <ListItemText primary={getLegsData(flight, "stopCount") + " stops"} />
        <ListItemText primary={flight.price.formatted} />
      </ListItem>
    </>
  );
}
