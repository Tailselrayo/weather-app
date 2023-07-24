import { WeatherData } from "./WeatherData";
import { WeatherHourlyData } from "./WeatherHourlyData";
import { WeatherUnits } from "./WeatherUnits";

export interface Weather {
    cityId?: number;
    daily: WeatherData;
    daily_units: WeatherUnits;
    hourly: WeatherHourlyData;
    latitude: number;
    longitude: number;
}