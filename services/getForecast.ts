import axios from "axios";
import { Coordinates, Forecast } from "../common/interfaces";

const NWS_API = "https://api.weather.gov/points/";

const getForecast = async (coordinates: Coordinates): Promise<Forecast[]> => {
  try {
    const { latitude, longitude } = coordinates;
    const {
      data: {
        properties: { forecast },
      },
    } = await axios.get(`${NWS_API}${latitude},${longitude}`);
    const {
      data: {
        properties: { periods },
      },
    } = await axios.get(forecast);
    return periods as Forecast[];
  } catch (err) {
    throw err;
  }
};

export default getForecast;
