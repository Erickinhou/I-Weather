// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Coordinates } from "../../common/interfaces";

const GEO_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json";

interface Response {
  coordinates?: Coordinates;
  description?: string;
  error?: Error;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const address = req.query.address as string;

    if (!address)
      return res.status(400).json({ description: "Address is required" });
    const url = `${GEO_URL}&address=${address}`;
    const response: AxiosResponse = await axios.get(url);
    if (!response.data.result.addressMatches.length)
      return res.status(200).json({ description: "Address not found" });
    const { x, y } = response.data.result?.addressMatches[0]?.coordinates;

    res.status(200).json({ coordinates: { longitude: x, latitude: y } });
  } catch (error) {
    res.status(500).json({ error: error as Error });
  }
}
