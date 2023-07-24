import { Group, Stack, Text } from "@mantine/core";
import { WeatherIcons } from "./WeatherIcons";
import { Temperature } from "@/types/Temperature";
import { Speed } from "@/types/Speed";
import { IconTemperature, IconWind } from "@tabler/icons-react";

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
            <Group>
                <Group position="center" spacing={1}>
                    <IconTemperature />
                    <Text ta="center" fz="sm"> {Math.round(props.temp)}{props.tempUnit}</Text>
                </Group>
                <Group position="center" spacing={1}>
                    <IconWind />
                    <Text  fz="sm">  {Math.round(props.windspeed)}{props.windUnit}</Text>
                </Group>
            </Group>
            

            <Text italic>{`Feels like ${Math.round(props.appTemp)}${props.tempUnit}`}</Text>

        </Stack>
    )
}