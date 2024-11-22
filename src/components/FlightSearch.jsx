import React, { useState, useEffect, useMemo } from "react";
import { envVar } from "../utils/envVars";
import { CABIN_CLASS_OPTIONS } from "../utils/constants";
import { Button, TextField, FormControl, Autocomplete } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const FlightSearch = ({ onSearch, airPorts }) => {
  const [originSkyId, setOriginSkyId] = useState("");
  const [originEntityId, setOriginEntityId] = useState();
  const [destinationEntityId, setDestinationEntityId] = useState();
  const [destinationSkyId, setDestinationSkyId] = useState("");
  const [cabinClass, setCabinClass] = useState("");
  const [date, setDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [originDataSource, setOriginDataSource] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      cabinClass,
      date,
      returnDate,
      adults,
      sortBy: envVar("RAPID_API_SHORT_BY"),
      currency: envVar("RAPID_API_CURRENCY"),
      market: envVar("RAPID_API_MARKET"),
      countryCode: envVar("RAPID_API_COUNTRY_CODE"),
    });
  };

  useEffect(() => {
    setOriginDataSource(
      airPorts.map((airport) => ({
        value: airport.skyId,
        label: airport.presentation.suggestionTitle,
        entityId: airport.entityId,
      }))
    );
  }, [airPorts]);

  function handleChangeOptions(selectedOption, selectBox) {
    if (selectBox === "origin" && selectedOption) {
      setOriginSkyId(selectedOption.value);
      setOriginEntityId(selectedOption.entityId);
    }
    if (selectBox === "destination" && selectedOption) {
      setDestinationSkyId(selectedOption.value);
      setDestinationEntityId(selectedOption.entityId);
    }
  }

  const destinationDataSource = useMemo(() => {
    return originDataSource.filter((option) => option.value !== originSkyId);
  }, [originSkyId, originDataSource]);

  return (
    <FormControl fullWidth>
      <form onSubmit={handleSubmit} className='flight-search-form'>
        <Autocomplete
          options={originDataSource}
          onChange={(event, option) => handleChangeOptions(option, "origin")}
          renderInput={(params) => <TextField {...params} label='Origin' />}
          required
        />

        <Autocomplete
          options={destinationDataSource || []}
          onChange={(event, option) =>
            handleChangeOptions(option, "destination")
          }
          renderInput={(params) => (
            <TextField {...params} label='Destination' />
          )}
          required
          disabled={!originSkyId}
        />

        <Autocomplete
          options={CABIN_CLASS_OPTIONS || []}
          value={cabinClass}
          onChange={(event, option) =>
            setCabinClass(option ? option.value : "")
          }
          renderInput={(params) => (
            <TextField {...params} label='Cabin Class' />
          )}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            format='YYYY-MM-DD'
            onChange={(date) => setDate(date.format("YYYY-MM-DD"))}
            placeholderText='Departure Date'
            required
            minDate={dayjs()}
            label='Departure Date'
          />
          <DatePicker
            format='YYYY-MM-DD'
            onChange={(returnDate) =>
              setReturnDate(returnDate.format("YYYY-MM-DD"))
            }
            placeholderText='Return Date (optional)'
            minDate={dayjs()}
            variant='outlined'
            label='Return Date (optional)'
          />
        </LocalizationProvider>
        <TextField
          id='outlined-basic'
          label='Adults'
          variant='outlined'
          type='number'
          placeholder='Adults'
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          required
        />
        <Button variant='contained' type='submit'>
          Search Flights
        </Button>
      </form>
    </FormControl>
  );
};

export default FlightSearch;
