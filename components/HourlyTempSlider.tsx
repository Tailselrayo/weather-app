import { Speed } from "@/types/Speed";
import { Temperature } from "@/types/Temperature";
import { WeatherHourlyData } from "@/types/WeatherHourlyData";
import { Carousel, Embla } from "@mantine/carousel";
import { HourlyTempSliderCard } from "./HourlyTempSliderCard";
import { useEffect, useState } from "react";

interface HourlyTempSliderProps extends WeatherHourlyData{
    windUnit: Speed;
    tempUnit: Temperature;
}

export function HourlyTempSlider(props: HourlyTempSliderProps) {
    const [embla, setEmbla] = useState<Embla>()

    useEffect(() => embla?.scrollTo(8),[props])
    return (
        <Carousel
            h="100%"
            w="100%"
            slideSize="20%"
            slideGap={0}
            withControls={false}
            dragFree
            initialSlide={9}
            getEmblaApi={setEmbla}
        >
            {Array.from({length: 24}).map((_,index)=> {
                return (
                    <Carousel.Slide key={index}>
                        <HourlyTempSliderCard
                            temp={props.temperature_2m[index]}
                            appTemp={props.apparent_temperature[index]}
                            windspeed={props.windspeed_10m[index]}
                            weathercode={props.weathercode[index]}
                            time={index}
                            isDay={props.is_day[index]}
                            tempUnit={props.tempUnit}
                            windUnit={props.windUnit}
                        />
                    </Carousel.Slide>
                )
            })}
        </Carousel>
    )
}