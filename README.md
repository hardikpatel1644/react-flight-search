# React + Rapid API + Material UI: Google Flights Search

A simple React application for searching flights, inspired by Google Flights. This app utilizes the **Sky Scraper API** from RapidAPI and **Material UI** to provide a responsive and user-friendly flight search experience.

---

## Features
- **API Configurations**: Managed in a `.env` file for flexibility.
- **Sample Data Option**: Use mock data for testing by setting `REACT_APP_USE_SAMPLE_DATA` to `true`.
- **Flight Search**: Filter flights by origin, destination, departure date, return date, and number of travelers (adults).
- **Responsive Design**: Built with Material UI for optimal display on various devices.

---

## Setup Instructions
Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/flight-search-app.git
```

### 2. Install Dependencies
Navigate to the project folder and install required packages:

```bash
cd flight-search-app
npm install
```

### 3. Configure Environment Variables
Create a .env file (if not already present) in the root directory with the following configurations:

```plaintext
REACT_APP_RAPID_API_KEY=Your-API-KEY
REACT_APP_RAPID_API_HOST=sky-scrapper.p.rapidapi.com
REACT_APP_RAPID_API_VERSION_1=api/v1
REACT_APP_RAPID_API_VERSION_2=api/v2
REACT_APP_RAPID_API_SHORT_BY=best
REACT_APP_RAPID_API_CURRENCY=USD
REACT_APP_RAPID_API_MARKET=en-US
REACT_APP_RAPID_API_COUNTRY_CODE=US
REACT_APP_USE_SAMPLE_DATA=false

```

To use sample data instead of live API data, update:

```plaintext
REACT_APP_USE_SAMPLE_DATA=true
```

### 4. Start the Application
Run the development server:
```bash
npm start
```

---


## How to Use
1. Enter the required details in the search form:
  - Origin
  - Destination: Auto-populated based on the origin.
  - Departure and Return Dates
  - Cabin Class
  - Number of Travelers
2. Click Search.
3. View available flights fetched from the API or sample data (if enabled).

---

## API Details
### Sky Scraper API
The Sky Scraper API provides real-time data on flights, hotels, rental cars, and more. It is ideal for creating travel websites similar to Skyscanner or Booking.com.

#### API Key
Register on RapidAPI and retrieve your API key to use this service. Add the key to your .env file as shown above.

#### Endpoints and Parameters
- Search Airport
  URL: https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport

  Example Parameters:
  ```plaintext
    {
        query: 'new',
        locale: 'en-US'
    }
  ```

- Search Flights
  URL: https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightsWebComplete

  Example Parameters:
  ```plaintext
    {
        originSkyId: 'JFK',
        destinationSkyId: 'MIA',
        originEntityId: '95565058',
        destinationEntityId: '95673821',
        cabinClass: 'economy',
        adults: '1',
        sortBy: 'best',
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US'
    }
  ```
---
## License
This project is licensed under the MIT License. See the LICENSE file for details.

--- 
## Acknowledgments
- <a href="https://rapidapi.com/">RapidAPI</a> for providing the Sky Scraper API.
- <a href="https://mui.com/">Material UI</a> for the responsive design framework.
- Inspired by the simplicity and utility of Google Flights.
