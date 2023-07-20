import { Speed } from "./Speed";
import { Temperature } from "./Temperature";

export interface WeatherUnits {
    temperature_2m_max: Temperature;
    windspeed_10m_max: Speed;
}