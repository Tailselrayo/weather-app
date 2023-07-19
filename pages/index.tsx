import { Box, Group, Stack, Text } from "@mantine/core";
import cities from '@/json/cities.json'
import { Weather } from "@/types/Weather";
import { TemperatureDisplay } from "@/components/TemperatureDisplay";
import { WeatherImageDisplay } from "@/components/WeatherImageDisplay";

interface WeatherProps {
  weather: Weather;
}

export async function getServerSideProps() {
  const marseilleCoord = cities.results.find((elem)=>elem.name==="Marseille")!;
  const urlParams = new URLSearchParams({
    latitude: marseilleCoord.latitude.toString(),
    longitude: marseilleCoord.longitude.toString(),
    daily: "temperature_2m_max,temperature_2m_min",
    timezone: "auto",
  })
  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${urlParams}`)
  const data = await weatherResponse.json();
  return ({props: {weather: data}})
}

export default function Home(props: WeatherProps) {

  console.log(props.weather)
  return (
    <Stack h="100%" w="100%" align="center">
      <Group w="100%" h="70%" bg="cyan" position="apart" grow>
        <TemperatureDisplay 
          temperature={props.weather.daily.temperature_2m_max[0]}
          unit={props.weather.daily_units.temperature_2m_max}
        />
        <WeatherImageDisplay weatherCode="clear"/>
      </Group>

    </Stack>
  )
}
