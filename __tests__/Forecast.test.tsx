import { render, screen, fireEvent } from "@testing-library/react";
import ForecastCard from "../components/Forecast/ForecastCard";
const mockedForecast = {
  isDaytime: true,
  name: "Sunday",
  shortForecast: "Mostly Sunny",
  startTime: "2022-04-24T06:00:00-04:00",
  temperature: 81,
  windSpeed: "5 to 9 mph",
};
describe("ForecastCard", () => {
  it("should be able to render forecast", () => {
    render(<ForecastCard forecast={mockedForecast} />);
    const forecastCardElement = screen.getByTestId(/forecast-test-id/i);
    expect(forecastCardElement).toBeInTheDocument();
  });
});
