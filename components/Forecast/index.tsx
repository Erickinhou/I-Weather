import React, { useCallback, useEffect, useState } from "react";
import { Coordinates, Forecast } from "../../common/interfaces";
import { ForecastWrapper } from "./styles";
import getForecast from "../../services/getForecast";
import ForecastCard from "./ForecastCard";
import { toast, ToastContainer } from "react-toastify";
import { popup } from "../../animations";

interface Props {
  coordinates: Coordinates;
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}

const Forecast: React.FC<Props> = ({ coordinates, days }) => {
  const [forecasters, setForecasters] = useState<Forecast[]>();

  const loadForecast = useCallback(async () => {
    try {
      const result = await getForecast(coordinates);
      setForecasters(result.filter((_, index) => index < days * 2));
      toast.success("Forecast found");
    } catch (error) {
      toast.error("Forecast not find");
      console.error(error);
    }
  }, [coordinates]);

  useEffect(() => {
    loadForecast();
  }, [loadForecast]);

  if (!forecasters) return <></>;

  return (
    <ForecastWrapper
      variants={popup}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ToastContainer />
      {forecasters.map((forecast) => (
        <ForecastCard key={forecast.number} forecast={forecast} />
      ))}
    </ForecastWrapper>
  );
};

export default Forecast;
