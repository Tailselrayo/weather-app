import { WeatherData } from "./WeatherData";
import { WeatherUnits } from "./WeatherUnits";

export interface Weather {
    cityId?: number;
    daily: WeatherData;
    daily_units: WeatherUnits;
    latitude: number;
    longitude: number;
}