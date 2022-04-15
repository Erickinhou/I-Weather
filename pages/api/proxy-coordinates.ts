// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const GEO_URL =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?benchmark=2020&format=json";

interface Response {
  coordinates?: {
    longitude?: number;
    latitude?: number;
  };
  description?: string;
  error?: Error;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    const address = req.query.address as string;
    console.log(address);

    if (!address)
      return res.status(400).json({ description: "Address is required" });
    const url = `${GEO_URL}&address=${address}`;
    const response: AxiosResponse = await axios.get(url);
    if (!response.data.result.addressMatches.length)
      return res.status(200).json({ description: "Address not found" });
    const coordinates = response.data.result?.addressMatches[0]?.coordinates;

    res.status(200).json({ coordinates });
  } catch (error) {
    res.status(500).json({ error: error as Error });
  }
}
