import { Button, Group, Loader, Stack, Title, Text } from "@mantine/core";
import { Weather } from "@/types/Weather";
import { DaySlider } from "@/components/DaySlider";
import { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { useLocalStorage } from "@mantine/hooks";
import { City } from "@/types/City";
import { getWeatherFromCity } from "@/utils/getWeatherFromCity";
import { OverviewDisplay } from "@/components/OverviewDisplay";

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
  const [seeDetails, setSeeDetails] = useState(false);
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

  //On extrait toutes les données que l'on a typé

  return (
    <Stack h="100%" w="100%" align="center">
      <Stack h="100%" w="100%" style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
        <Group position="apart" px="xl">
          <Title italic>Meteo from {city.name} : {(new Date(time[slideNb])).toLocaleDateString()}</Title>
          <Button color="gray.1" onClick={()=>setSeeDetails(!seeDetails)}>
            <Text color="dark">{seeDetails?"<- Overview":"Details ->"}</Text>:
          </Button>
        </Group>
        {!seeDetails?
        <OverviewDisplay {...weather} slideNb={slideNb}/>:
        <Loader></Loader>
        }
      </Stack>
      <DaySlider {...weatherData} tempUnit={tempUnit} windUnit={windUnit} onSlideClick={(index) => setSlideNb(index)} />
    </Stack>
  )
}
