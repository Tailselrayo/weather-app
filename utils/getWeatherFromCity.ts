import { City } from "@/types/City";

export async function getWeatherFromCity(city: City, forcastDays: 1|3|7|14) {
    const urlParams = new URLSearchParams({
        latitude: city.latitude.toString(),
        longitude: city.longitude.toString(),
        daily: "temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode",
        hourly: "temperature_2m,apparent_temperature,windspeed_10m,weathercode,is_day",
        timezone: "auto",
        forcast_days: forcastDays.toString(),
      })
      const weatherResponse = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}?${urlParams}`)
      const data = await weatherResponse.json();
      return data
}