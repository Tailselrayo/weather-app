import {  Group, Stack, Title } from "@mantine/core";
import cities from '@/json/cities.json'
import { Weather } from "@/types/Weather";
import { TemperatureDisplay } from "@/components/TemperatureDisplay";
import { WeatherImageDisplay } from "@/components/WeatherImageDisplay";
import { findPlaceFromCoords } from "@/utils/findPlaceFromCoords";
import { DaySlider } from "@/components/DaySlider";
import { useState } from "react";
import { WindDisplay } from "@/components/WindDisplay";

interface WeatherProps {
  weather: Weather;
}

export async function getServerSideProps() {
  const marseilleCoord = cities.results.find((elem)=>elem.name==="Marseille")!;
  const urlParams = new URLSearchParams({
    latitude: marseilleCoord.latitude.toString(),
    longitude: marseilleCoord.longitude.toString(),
    daily: "temperature_2m_max,temperature_2m_min,windspeed_10m_max,weathercode",
    timezone: "auto",
    forcast_days: "7",
  })
  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${urlParams}`)
  const data = await weatherResponse.json();
  return ({props: {weather: data}})
}

export default function Weather(props: WeatherProps) {
  const [slideNb, setSlideNb] = useState(0);

  const data = props.weather;
  const coords = [data.latitude, data.longitude];
  const tempUnit = data.daily_units.temperature_2m_max;
  const windUnit = data.daily_units.windspeed_10m_max;
  const time = data.daily.time;
  const weatherData = data.daily;
  
  //On extrait toutes les données que l'on a typé

  console.log(time[0])
  return (
    <Stack h="100%" w="100%" align="center">
      <Title>Meteo from {findPlaceFromCoords(coords)} : {(new Date(time[slideNb])).toLocaleDateString()}</Title>
      <Group
        w="100%"
        h="60%"
        bg="cyan"
        position="apart"
        grow
      >
        <TemperatureDisplay 
          temperature={weatherData.temperature_2m_max[slideNb]}
          unit={tempUnit}
        />
        <WeatherImageDisplay weatherCode={weatherData.weathercode[slideNb]}/>
        <WindDisplay unit={windUnit} windspeedValue={weatherData.windspeed_10m_max[slideNb]}/>
      </Group>
      <DaySlider {...weatherData} tempUnit={tempUnit} windUnit={windUnit} onSlideClick={(index)=>setSlideNb(index)}/>
    </Stack>
  )
}
