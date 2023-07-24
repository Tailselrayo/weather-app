import { Stack, Text } from "@mantine/core";
import { WeatherIcons } from "./WeatherIcons";
import { Temperature } from "@/types/Temperature";
import { Speed } from "@/types/Speed";

interface HourlyTempSliderCardProps {
    temp: number;
    appTemp: number;
    windspeed: number;
    weathercode: number;
    time: number;
    isDay: 0|1;
    tempUnit: Temperature;
    windUnit: Speed;
}

export function HourlyTempSliderCard(props: HourlyTempSliderCardProps) {
    return(
        <Stack align="center" spacing={2} style={{borderLeftStyle: props.time?"dotted":"none", borderRightStyle: props.time===23?"none":"dotted"}}>
            <Text fz={20} fw="bold">{`${props.time}:00`}</Text>
            <WeatherIcons weatherCode={props.weathercode} isDay={props.isDay} size={100}/>
            <Text ta="center" fz="xl">{Math.round(props.temp)} {props.tempUnit}</Text>
            <Text>{`Feels like ${Math.round(props.appTemp)}${props.tempUnit}`}</Text>
            <Text italic fz="sm">{`windspeed : ${Math.round(props.windspeed)}${props.windUnit}`}</Text>
        </Stack>
    )
}