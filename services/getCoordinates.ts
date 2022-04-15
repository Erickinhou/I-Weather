import axios, { AxiosError } from "axios";
import { Coordinates } from "../common/interfaces";

interface GetCoordinatesResponse {
  coordinates?: Coordinates;
  description?: string;
  error?: Error;
}

const getCoordinates = async (
  address: string
): Promise<GetCoordinatesResponse> => {
  console.log("Json", JSON.stringify({ address }));
  const url = `/api/proxy-coordinates?address=${address}`;
  try {
    const response = await axios.get(url);
    const coordinates = response.data;
    return coordinates;
  } catch (error) {
    const err = error as AxiosError;
    return {
      error: err.response?.data?.error,
      description: err.response?.data.description,
    };
  }
};

export default getCoordinates;
