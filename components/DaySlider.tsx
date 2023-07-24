import { Speed } from "@/types/Speed";
import { Temperature } from "@/types/Temperature";
import { WeatherData } from "@/types/WeatherData";
import { Carousel, Embla } from "@mantine/carousel";
import { Card, Group, Stack, Text } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconTemperature, IconWind } from "@tabler/icons-react";
import { WeatherIcons } from "./WeatherIcons";

interface DaySliderProps extends WeatherData {
    tempUnit: Temperature,
    windUnit: Speed,
    onSlideClick: (index: number) => void;
}

export function DaySlider(props: DaySliderProps) {

    return (
        <Carousel
            w="100%"
            height="100%"
            slideSize="33.3333%"
            slideGap="sm"
            nextControlIcon={<IconArrowRight size={16} />}
            previousControlIcon={<IconArrowLeft size={16} />}
            onSlideChange={(index) => props.onSlideClick(index)}
        >
            {Array.from({ length: props.time.length }).map((_, index) => {
                return (
                    <Carousel.Slide key={index} onClick={() => props.onSlideClick(index)}>
                        <Card style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.4)"}}>
                            <Text ta="center" size="xl" fw="bold">{(new Date(props.time[index])).toDateString()}</Text>
                            <Group position="center" grow>
                                <Stack align="center" spacing={2}>
                                    <IconTemperature />
                                    <Text>{props.temperature_2m_max[index]} {props.tempUnit}</Text>
                                </Stack>
                                <WeatherIcons weatherCode={props.weathercode[index]} size={60}/>
                                <Stack align="center" spacing={2}>
                                    <IconWind />
                                    <Text>{props.windspeed_10m_max[index]} {props.windUnit}</Text>
                                </Stack>
                            </Group>
                        </Card>
                    </Carousel.Slide>
                )
            })}
        </Carousel>
    )
}