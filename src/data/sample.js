export const sampleFlightsData = {
  context: {
    status: "complete",
    sessionId:
      "Cl0IARJZCk4KJDYyOWY1MTk0LTgxYzYtNGRiMi1hNDEzLWU3NTZlOTI2MmE3YxABGiQ4YTVhYWZmOS03YWY4LTQzOTYtOGNkZC05MGNjZmIxOWU2MzIQg_XB_rQyGAEKNwgDEjMKKAokODcyYWMwYmMtNzRiMy00NzVhLWFmYjUtZmU1OTI4MWUyMzBiEAEQg_XB_rQyGAESKHVzc19kNDZmZmI1Ny01MDUxLTRhOGYtYTdkNS0yZWI5MTc1N2U4ODAYAQ==",
    count: 2,
  },
  itineraries: [
    {
      id: "12712-2411211859--32593-2-14074-2411221755",
      price: {
        raw: 1025,
        formatted: "$1,025",
        pricingOptionId: "6tnzbWhDw6Qp",
      },
      legs: [
        {
          id: "12712-2411211859--32593-2-14074-2411221755",
          origin: {
            id: "JFK",
            entityId: "95565058",
            name: "New York John F. Kennedy",
            displayCode: "JFK",
            city: "New York",
            country: "United States",
            isHighlighted: false,
          },
          destination: {
            id: "MIA",
            entityId: "95673821",
            name: "Miami International",
            displayCode: "MIA",
            city: "Miami",
            country: "United States",
            isHighlighted: false,
          },
          durationInMinutes: 1376,
          stopCount: 2,
          isSmallestStops: false,
          departure: "2024-11-21T18:59:00",
          arrival: "2024-11-22T17:55:00",
          timeDeltaInDays: 1,
          carriers: {
            marketing: [
              {
                id: -32593,
                alternateId: "AS",
                logoUrl:
                  "https://logos.skyscnr.com/images/airlines/favicon/AS.png",
                name: "Alaska Airlines",
              },
            ],
            operating: [
              {
                id: -31532,
                alternateId: "!;",
                logoUrl:
                  "https://logos.skyscnr.com/images/airlines/favicon/%21%3B.png",
                name: "Horizon Air AS Alaska Airlines",
              },
            ],
            operationType: "partially_operated",
          },
          segments: [
            {
              id: "12712-16177-2411211859-2411212218--32593",
              origin: {
                flightPlaceId: "JFK",
                displayCode: "JFK",
                parent: {
                  flightPlaceId: "NYCA",
                  displayCode: "NYC",
                  name: "New York",
                  type: "City",
                },
                name: "New York John F. Kennedy",
                type: "Airport",
                country: "United States",
              },
              destination: {
                flightPlaceId: "SEA",
                displayCode: "SEA",
                parent: {
                  flightPlaceId: "SEAA",
                  displayCode: "SEA",
                  name: "Seattle",
                  type: "City",
                },
                name: "Seattle / Tacoma International",
                type: "Airport",
                country: "United States",
              },
              departure: "2024-11-21T18:59:00",
              arrival: "2024-11-21T22:18:00",
              durationInMinutes: 379,
              flightNumber: "17",
              marketingCarrier: {
                id: -32593,
                name: "Alaska Airlines",
                alternateId: "AS",
                allianceId: -32000,
                displayCode: "AS",
              },
              operatingCarrier: {
                id: -32593,
                name: "Alaska Airlines",
                alternateId: "AS",
                allianceId: -32000,
                displayCode: "AS",
              },
            },
            {
              id: "16177-15265-2411220640-2411220736--32593",
              origin: {
                flightPlaceId: "SEA",
                displayCode: "SEA",
                parent: {
                  flightPlaceId: "SEAA",
                  displayCode: "SEA",
                  name: "Seattle",
                  type: "City",
                },
                name: "Seattle / Tacoma International",
                type: "Airport",
                country: "United States",
              },
              destination: {
                flightPlaceId: "PDX",
                displayCode: "PDX",
                parent: {
                  flightPlaceId: "PDXA",
                  displayCode: "PDX",
                  name: "Portland",
                  type: "City",
                },
                name: "Portland",
                type: "Airport",
                country: "United States",
              },
              departure: "2024-11-22T06:40:00",
              arrival: "2024-11-22T07:36:00",
              durationInMinutes: 56,
              flightNumber: "2129",
              marketingCarrier: {
                id: -32593,
                name: "Alaska Airlines",
                alternateId: "AS",
                allianceId: -32000,
                displayCode: "AS",
              },
              operatingCarrier: {
                id: -31532,
                name: "Horizon Air AS Alaska Airlines",
                alternateId: "!;",
                allianceId: 0,
                displayCode: "!;",
              },
            },
            {
              id: "15265-14074-2411220926-2411221755--32593",
              origin: {
                flightPlaceId: "PDX",
                displayCode: "PDX",
                parent: {
                  flightPlaceId: "PDXA",
                  displayCode: "PDX",
                  name: "Portland",
                  type: "City",
                },
                name: "Portland",
                type: "Airport",
                country: "United States",
              },
              destination: {
                flightPlaceId: "MIA",
                displayCode: "MIA",
                parent: {
                  flightPlaceId: "MIAA",
                  displayCode: "MIA",
                  name: "Miami",
                  type: "City",
                },
                name: "Miami International",
                type: "Airport",
                country: "United States",
              },
              departure: "2024-11-22T09:26:00",
              arrival: "2024-11-22T17:55:00",
              durationInMinutes: 329,
              flightNumber: "441",
              marketingCarrier: {
                id: -32593,
                name: "Alaska Airlines",
                alternateId: "AS",
                allianceId: -32000,
                displayCode: "AS",
              },
              operatingCarrier: {
                id: -32593,
                name: "Alaska Airlines",
                alternateId: "AS",
                allianceId: -32000,
                displayCode: "AS",
              },
            },
          ],
        },
      ],
      isSelfTransfer: false,
      isProtectedSelfTransfer: false,
      farePolicy: {
        isChangeAllowed: false,
        isPartiallyChangeable: false,
        isCancellationAllowed: false,
        isPartiallyRefundable: false,
      },
      fareAttributes: {},
      isMashUp: false,
      hasFlexibleOptions: false,
      score: 0.026287,
      pricingOptions: [
        {
          agentIds: ["skyp"],
          price: { updateStatus: "current", amount: 1025 },
          items: [
            {
              price: { updateStatus: "current", amount: 1025 },
              segmentIds: [
                "12712-16177-2411211859-2411212218--32593",
                "16177-15265-2411220640-2411220736--32593",
                "15265-14074-2411220926-2411221755--32593",
              ],
              bookingProposition: "PBOOK",
              agentId: "skyp",
              url: "/transport_deeplink/4.0/US/en-US/USD/skyp/1/12712.14074.2024-11-21/air/trava/flights?itinerary=flight|-32593|17|12712|2024-11-21T18:59|16177|2024-11-21T22:18|379|MH0OAVBN|X|-;flight|-32593|2129|16177|2024-11-22T06:40|15265|2024-11-22T07:36|56|KH0OAVBN|X|-;flight|-32593|441|15265|2024-11-22T09:26|14074|2024-11-22T17:55|329|VH0OAVBN|X|-&carriers=-32593&operators=-32593;-31532;-32593&passengers=1&channel=website&cabin_class=economy&fps_session_id=629f5194-81c6-4db2-a413-e756e9262a7c&ticket_price=1025.00&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=f2f16b1b-529f-0c04-bbc7-d03c0c238722&q_ids=H4sIAAAAAAAA_-OS4mIpzq4sEGLmWJEsxczxK1eh4cPPnWxGTAqMAIXgYXUcAAAA|4611255680766585711|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-11-21T17:41:29&pqid=true&fare_type=base_fare",
            },
          ],
          pricingOptionId: "6tnzbWhDw6Qp",
          fareAttributes: {},
        },
      ],
    },
    {
      id: "12712-2411212200--31781-1-14074-2411222045",
      price: {
        raw: 2334,
        formatted: "$2,334",
        pricingOptionId: "kHlIsWoVuqnI",
      },
      legs: [
        {
          id: "12712-2411212200--31781-1-14074-2411222045",
          origin: {
            id: "JFK",
            entityId: "95565058",
            name: "New York John F. Kennedy",
            displayCode: "JFK",
            city: "New York",
            country: "United States",
            isHighlighted: false,
          },
          destination: {
            id: "MIA",
            entityId: "95673821",
            name: "Miami International",
            displayCode: "MIA",
            city: "Miami",
            country: "United States",
            isHighlighted: false,
          },
          durationInMinutes: 1365,
          stopCount: 1,
          isSmallestStops: false,
          departure: "2024-11-21T22:00:00",
          arrival: "2024-11-22T20:45:00",
          timeDeltaInDays: 1,
          carriers: {
            marketing: [
              {
                id: -31781,
                alternateId: "TP",
                logoUrl:
                  "https://logos.skyscnr.com/images/airlines/favicon/TP.png",
                name: "TAP Air Portugal",
              },
            ],
            operationType: "fully_operated",
          },
          segments: [
            {
              id: "12712-13577-2411212200-2411220955--31781",
              origin: {
                flightPlaceId: "JFK",
                displayCode: "JFK",
                parent: {
                  flightPlaceId: "NYCA",
                  displayCode: "NYC",
                  name: "New York",
                  type: "City",
                },
                name: "New York John F. Kennedy",
                type: "Airport",
                country: "United States",
              },
              destination: {
                flightPlaceId: "LIS",
                displayCode: "LIS",
                parent: {
                  flightPlaceId: "LISB",
                  displayCode: "LIS",
                  name: "Lisbon",
                  type: "City",
                },
                name: "Lisbon",
                type: "Airport",
                country: "Portugal",
              },
              departure: "2024-11-21T22:00:00",
              arrival: "2024-11-22T09:55:00",
              durationInMinutes: 415,
              flightNumber: "210",
              marketingCarrier: {
                id: -31781,
                name: "TAP Air Portugal",
                alternateId: "TP",
                allianceId: -31999,
                displayCode: "TP",
              },
              operatingCarrier: {
                id: -31781,
                name: "TAP Air Portugal",
                alternateId: "TP",
                allianceId: -31999,
                displayCode: "TP",
              },
            },
            {
              id: "13577-14074-2411221610-2411222045--31781",
              origin: {
                flightPlaceId: "LIS",
                displayCode: "LIS",
                parent: {
                  flightPlaceId: "LISB",
                  displayCode: "LIS",
                  name: "Lisbon",
                  type: "City",
                },
                name: "Lisbon",
                type: "Airport",
                country: "Portugal",
              },
              destination: {
                flightPlaceId: "MIA",
                displayCode: "MIA",
                parent: {
                  flightPlaceId: "MIAA",
                  displayCode: "MIA",
                  name: "Miami",
                  type: "City",
                },
                name: "Miami International",
                type: "Airport",
                country: "United States",
              },
              departure: "2024-11-22T16:10:00",
              arrival: "2024-11-22T20:45:00",
              durationInMinutes: 575,
              flightNumber: "225",
              marketingCarrier: {
                id: -31781,
                name: "TAP Air Portugal",
                alternateId: "TP",
                allianceId: -31999,
                displayCode: "TP",
              },
              operatingCarrier: {
                id: -31781,
                name: "TAP Air Portugal",
                alternateId: "TP",
                allianceId: -31999,
                displayCode: "TP",
              },
            },
          ],
        },
      ],
      isSelfTransfer: false,
      isProtectedSelfTransfer: false,
      farePolicy: {
        isChangeAllowed: false,
        isPartiallyChangeable: false,
        isCancellationAllowed: false,
        isPartiallyRefundable: false,
      },
      fareAttributes: {},
      isMashUp: false,
      hasFlexibleOptions: false,
      score: 0.012388,
      pricingOptions: [
        {
          agentIds: ["skyp"],
          price: { updateStatus: "current", amount: 2334 },
          items: [
            {
              price: { updateStatus: "current", amount: 2334 },
              segmentIds: [
                "12712-13577-2411212200-2411220955--31781",
                "13577-14074-2411221610-2411222045--31781",
              ],
              bookingProposition: "PBOOK",
              agentId: "skyp",
              url: "/transport_deeplink/4.0/US/en-US/USD/skyp/1/12712.14074.2024-11-21/air/trava/flights?itinerary=flight|-31781|210|12712|2024-11-21T22:00|13577|2024-11-22T09:55|415|BF0PUI00|B|-;flight|-31781|225|13577|2024-11-22T16:10|14074|2024-11-22T20:45|575|AL0DSI00|A|-&carriers=-31781&operators=-31781;-31781&passengers=1&channel=website&cabin_class=economy&fps_session_id=629f5194-81c6-4db2-a413-e756e9262a7c&ticket_price=2334.00&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=f2f16b1b-529f-0c04-bbc7-d03c0c238722&q_ids=H4sIAAAAAAAA_-OS4mIpzq4sEGLmWJEsxczxK1eh4cPPnWxGTAqMAIXgYXUcAAAA|7286489015320193973|2&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2024-11-21T17:41:29&pqid=true&fare_type=base_fare",
            },
          ],
          pricingOptionId: "kHlIsWoVuqnI",
          fareAttributes: {},
        },
        {
          agentIds: ["tap_"],
          price: { updateStatus: "current", amount: 0 },
          unpricedType: "partner_not_selected",
          items: [
            {
              price: { updateStatus: "current", amount: 0 },
              segmentIds: [
                "12712-13577-2411212200-2411220955--31781",
                "13577-14074-2411221610-2411222045--31781",
              ],
              bookingProposition: "PBOOK",
              agentId: "tap_",
              url: "/transport_deeplink/4.0/US/en-US/USD/tap_/1/12712.14074.2024-11-21/air/airli/flights_np?itinerary=flight|-31781|210|12712|2024-11-21T22:00|13577|2024-11-22T09:55|415|-|-|-;flight|-31781|225|13577|2024-11-22T16:10|14074|2024-11-22T20:45|575|-|-|-&carriers=-31781&operators=-31781;-31781&passengers=1&channel=website&cabin_class=economy&fps_session_id=629f5194-81c6-4db2-a413-e756e9262a7c&is_npt=false&is_multipart=false&client_id=skyscanner_website&request_id=f2f16b1b-529f-0c04-bbc7-d03c0c238722&pqid=false&fare_type=base_fare",
            },
          ],
          pricingOptionId: "I6mG3WVErxqt",
          fareAttributes: {},
        },
      ],
    },
  ],
  carHire: {
    context: {
      status: "complete_not_modified",
      sessionId: "872ac0bc-74b3-475a-afb5-fe59281e230b",
      totalResults: 0,
    },
    results: [],
    buckets: [],
  },
};

export const sampleAirportsData = [
  {
    skyId: "NYCA",
    entityId: "27537542",
    presentation: {
      title: "New York",
      suggestionTitle: "New York (Any)",
      subtitle: "United States",
    },
    navigation: {
      entityId: "27537542",
      entityType: "CITY",
      localizedName: "New York",
      relevantFlightParams: {
        skyId: "NYCA",
        entityId: "27537542",
        flightPlaceType: "CITY",
        localizedName: "New York",
      },
      relevantHotelParams: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
      },
    },
  },
  {
    skyId: "EWR",
    entityId: "95565059",
    presentation: {
      title: "New York Newark",
      suggestionTitle: "New York Newark (EWR)",
      subtitle: "United States",
    },
    navigation: {
      entityId: "95565059",
      entityType: "AIRPORT",
      localizedName: "New York Newark",
      relevantFlightParams: {
        skyId: "EWR",
        entityId: "95565059",
        flightPlaceType: "AIRPORT",
        localizedName: "New York Newark",
      },
      relevantHotelParams: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
      },
    },
  },
  {
    skyId: "JFK",
    entityId: "95565058",
    presentation: {
      title: "New York John F. Kennedy",
      suggestionTitle: "New York John F. Kennedy (JFK)",
      subtitle: "United States",
    },
    navigation: {
      entityId: "95565058",
      entityType: "AIRPORT",
      localizedName: "New York John F. Kennedy",
      relevantFlightParams: {
        skyId: "JFK",
        entityId: "95565058",
        flightPlaceType: "AIRPORT",
        localizedName: "New York John F. Kennedy",
      },
      relevantHotelParams: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
      },
    },
  },
  {
    skyId: "LGA",
    entityId: "95565057",
    presentation: {
      title: "New York LaGuardia",
      suggestionTitle: "New York LaGuardia (LGA)",
      subtitle: "United States",
    },
    navigation: {
      entityId: "95565057",
      entityType: "AIRPORT",
      localizedName: "New York LaGuardia",
      relevantFlightParams: {
        skyId: "LGA",
        entityId: "95565057",
        flightPlaceType: "AIRPORT",
        localizedName: "New York LaGuardia",
      },
      relevantHotelParams: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
      },
    },
  },
  {
    skyId: "SWF",
    entityId: "95566280",
    presentation: {
      title: "Stewart International",
      suggestionTitle: "Stewart International (SWF)",
      subtitle: "United States",
    },
    navigation: {
      entityId: "95566280",
      entityType: "AIRPORT",
      localizedName: "Stewart International",
      relevantFlightParams: {
        skyId: "SWF",
        entityId: "95566280",
        flightPlaceType: "AIRPORT",
        localizedName: "Stewart International",
      },
      relevantHotelParams: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
      },
    },
  },
  {
    skyId: "NCL",
    entityId: "95674044",
    presentation: {
      title: "Newcastle",
      suggestionTitle: "Newcastle (NCL)",
      subtitle: "United Kingdom",
    },
    navigation: {
      entityId: "95674044",
      entityType: "AIRPORT",
      localizedName: "Newcastle",
      relevantFlightParams: {
        skyId: "NCL",
        entityId: "95674044",
        flightPlaceType: "AIRPORT",
        localizedName: "Newcastle",
      },
      relevantHotelParams: {
        entityId: "27545092",
        entityType: "CITY",
        localizedName: "Newcastle",
      },
    },
  },
  {
    skyId: "NQY",
    entityId: "95673963",
    presentation: {
      title: "Newquay",
      suggestionTitle: "Newquay (NQY)",
      subtitle: "United Kingdom",
    },
    navigation: {
      entityId: "95673963",
      entityType: "AIRPORT",
      localizedName: "Newquay",
      relevantFlightParams: {
        skyId: "NQY",
        entityId: "95673963",
        flightPlaceType: "AIRPORT",
        localizedName: "Newquay",
      },
      relevantHotelParams: {
        entityId: "27545149",
        entityType: "CITY",
        localizedName: "Newquay",
      },
    },
  },
  {
    skyId: "NZ",
    entityId: "29475342",
    presentation: {
      title: "New Zealand",
      suggestionTitle: "New Zealand",
      subtitle: "",
    },
    navigation: {
      entityId: "29475342",
      entityType: "COUNTRY",
      localizedName: "New Zealand",
      relevantFlightParams: {
        skyId: "NZ",
        entityId: "29475342",
        flightPlaceType: "COUNTRY",
        localizedName: "New Zealand",
      },
      relevantHotelParams: {
        entityId: "29475342",
        entityType: "COUNTRY",
        localizedName: "New Zealand",
      },
    },
  },
];
