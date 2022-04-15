export interface Coordinates {
  longitude?: number;
  latitude?: number;
}

export interface Forecast {
  detailedForecast?: string;
  endTime?: string;
  icon?: string;
  isDaytime?: boolean;
  name?: string;
  number?: number;
  shortForecast?: string;
  startTime?: string;
  temperature?: number;
  temperatureTrend?: string;
  temperatureUnit?: string;
  windDirection?: string;
  windSpeed?: string;
}
