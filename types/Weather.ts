import { WeatherData } from "./WeatherData";
import { WeatherUnits } from "./WeatherUnits";

export interface Weather {
    daily: WeatherData;
    daily_units: WeatherUnits;
    latitude: number;
    longitude: number;
    
}