export interface WeatherHourlyData {
    temperature_2m: number[];
    apparent_temperature: number[];
    windspeed_10m: number[];
    weathercode: number[];
    is_day: (0|1)[]
}