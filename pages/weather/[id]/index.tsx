import {  Group, Loader, Stack, Title } from "@mantine/core";
import { Weather } from "@/types/Weather";
import { TemperatureDisplay } from "@/components/TemperatureDisplay";
import { WeatherImageDisplay } from "@/components/WeatherImageDisplay";
import { DaySlider } from "@/components/DaySlider";
import { useEffect, useState } from "react";
import { WindDisplay } from "@/components/WindDisplay";
import { GetServerSidePropsContext } from "next";
import { useLocalStorage } from "@mantine/hooks";
import { City } from "@/types/City";
import { getWeatherFromCity } from "@/utils/getWeatherFromCity";

interface WeatherPageProps {
  id: number;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const param = context?.params?.id;
  if (isNaN(parseInt(param as string))) {
    return ({
      redirect: {
        destination: "/",
        permanent: false,
      }
    })
  }
  return ({props: {id: parseInt(param as string)}})
}

export default function WeatherPage(props: WeatherPageProps) {
  const [slideNb, setSlideNb] = useState(0);
  const [weather, setWeather] = useState<Weather>();
  const [cities] = useLocalStorage<City[]>({key: "cities"})
  const city = cities?.find((elem)=> elem.id ===props.id);
  useEffect(()=>{
    if(cities&&city) {
        getWeatherFromCity(city, 7).then(setWeather)
        console.log("request")
    }
  },[cities, city])

  if (!weather||!city) {
    return <Loader></Loader>
  }
  console.log(weather)
  const tempUnit = weather.daily_units.temperature_2m_max;
  const windUnit = weather.daily_units.windspeed_10m_max;
  const time = weather.daily.time;
  const weatherData = weather.daily;
  
  //On extrait toutes les données que l'on a typé

  return (
    <Stack h="100%" w="100%" align="center">
      <Title>Meteo from {city.name} : {(new Date(time[slideNb])).toLocaleDateString()}</Title>
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
