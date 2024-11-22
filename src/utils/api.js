import { envVar } from "./envVars";
import axios from "axios";

const apiHost = envVar("RAPID_API_HOST");
const apiKey = envVar("RAPID_API_KEY");

export const fetchData = async (apiEndPoint, apiVersion, searchParams) => {
  const apiBaseUrl = `https://${apiHost}/${apiVersion}`;
  try {
    const url = `${apiBaseUrl}/${apiEndPoint}`;
    const response = await axios.get(`${url}`, {
      params: searchParams,
      headers: {
        "x-rapidapi-key": `${apiKey}`,
        "x-rapidapi-host": `${apiHost}`,
      },
    });
    if (!response.status === 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(`HTTP error! Status: ${error.message}`);
  }
};
