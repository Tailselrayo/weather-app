import { Button, Group, Loader, Stack, Title, Text, Tabs } from "@mantine/core";
import { Weather } from "@/types/Weather";
import { DaySlider } from "@/components/DaySlider";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { useLocalStorage } from "@mantine/hooks";
import { City } from "@/types/City";
import { getWeatherFromCity } from "@/utils/getWeatherFromCity";
import { OverviewDisplay } from "@/components/OverviewDisplay";
import { HourlyTempSlider } from "@/components/HourlyTempSlider";
import { WeatherHourlyData } from "@/types/WeatherHourlyData";

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
  return ({ props: { id: parseInt(param as string) } })
}

export default function WeatherPage(props: WeatherPageProps) {
  const [slideNb, setSlideNb] = useState(0);
  const [weather, setWeather] = useState<Weather>();
  const [cities] = useLocalStorage<City[]>({ key: "cities" })
  const city = cities?.find((elem) => elem.id === props.id);
  useEffect(() => {
    if (cities && city) {
      getWeatherFromCity(city, 7).then(setWeather)
      console.log("request")
    }
  }, [cities, city])

  if (!weather || !city) {
    return <Loader></Loader>
  }
  console.log(weather)
  const tempUnit = weather.daily_units.temperature_2m_max;
  const windUnit = weather.daily_units.windspeed_10m_max;
  const time = weather.daily.time;
  const weatherData = weather.daily;

  //On extrait toutes les données daily que l'on a typé

  const extract24hDataFromDay = (dayNb: number): WeatherHourlyData => {
    return ({
      temperature_2m: weather.hourly.temperature_2m.slice((dayNb) * 24, (dayNb + 1) * 24),
      apparent_temperature: weather.hourly.apparent_temperature.slice((dayNb) * 24, (dayNb + 1) * 24),
      windspeed_10m: weather.hourly.windspeed_10m.slice((dayNb) * 24, (dayNb + 1) * 24),
      weathercode: weather.hourly.weathercode.slice((dayNb) * 24, (dayNb + 1) * 24),
      is_day: weather.hourly.is_day.slice((dayNb) * 24, (dayNb + 1) * 24),
    })
  }

  console.log(slideNb)

  return (
    <Stack h="100%" w="100%" align="center">
      <Stack h="100%" w="100%" style={{ backgroundColor: "rgba(255,255,255,0.7)" }} p="xs">
        <Title ta="center" italic>Meteo from {city.name} : {(new Date(time[slideNb])).toLocaleDateString()}</Title>
        <Tabs variant="pills" defaultValue={"overview"}>
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="details">Day's details</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview" p="lg">
            <OverviewDisplay {...weather} slideNb={slideNb} />
          </Tabs.Panel>
          <Tabs.Panel value="details" p="lg">
            <HourlyTempSlider
              {...extract24hDataFromDay(slideNb)}
              tempUnit={tempUnit}
              windUnit={windUnit}
            />
          </Tabs.Panel>
        </Tabs>
      </Stack>
      <DaySlider {...weatherData} tempUnit={tempUnit} windUnit={windUnit} onSlideClick={(index) => setSlideNb(index)} />
    </Stack>
  )
}
