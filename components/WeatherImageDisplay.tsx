import { WeatherCode } from "@/types/WeatherCode";
import { Stack, Title } from "@mantine/core";
import Image from "next/image";
import { WeatherIcons } from "./WeatherIcons";

interface WeatherImageDisplayProps {
    weatherCode: number;
}

export function WeatherImageDisplay(props: WeatherImageDisplayProps) {

    

    return (
        <Stack align="center">
            <Title fz="lg" color="gray.7">Weather Display</Title>
            <WeatherIcons weatherCode={props.weatherCode} size={200}/>
        </Stack>
    )
}