import Image from "next/image";
import React from "react";
import { Forecast } from "../../../common/interfaces";
import { Flex } from "../../../styles/globals";
import {
  ForecastWrapper,
  Title,
  Subtitle,
  Description,
  ImageWrapper,
  Time,
} from "./styles";

interface Props {
  forecast: Forecast;
}

const ForecastCard: React.FC<Props> = ({
  forecast: {
    isDaytime,
    shortForecast,
    name,
    startTime,
    temperature,
    windSpeed,
  },
}) => {
  return (
    <ForecastWrapper data-testid={`forecast-test-id`}>
      <Flex>
        <ImageWrapper>
          <Image
            src={choseIcon(shortForecast, isDaytime)}
            alt="Forecast icon"
            layout="fill"
          />
        </ImageWrapper>
        <Flex direction="column">
          <Title>{name}</Title>
          <Subtitle>
            {temperature}°F / {fahrenheitToCelsius(temperature)}°C🌡️
            <br />
            {windSpeed} 💨
          </Subtitle>
          <Time>{convertTime(startTime)}</Time>
        </Flex>
      </Flex>
      <Description>{shortForecast}</Description>
    </ForecastWrapper>
  );
};

const choseIcon = (
  shortForecast: string | undefined,
  isDaytime: boolean | undefined
): string => {
  // This function chose an icon based in forecast result
  const baseSrc = "/images";
  if (shortForecast?.includes("Showers")) return `${baseSrc}/rain.png`;
  if (shortForecast?.includes("Thunderstorms")) return `${baseSrc}/storm.png`;
  if (!isDaytime) return `${baseSrc}/night.png`;
  if (shortForecast?.includes("Sunny")) return `${baseSrc}/sun.png`;
  if (shortForecast?.includes("Cloudy")) return `${baseSrc}/cloudy.png`;
  return `${baseSrc}/cloudy.png`;
};

const convertTime = (date: string | undefined) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (!date) return;
  return new Date(date).toLocaleString("en-US", options);
};

const fahrenheitToCelsius = (f: number | undefined) => {
  if (!f) return 0;
  return Math.round(((f - 32) * 5) / 9);
};

export default ForecastCard;
