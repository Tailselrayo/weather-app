import { Carousel, Embla } from "@mantine/carousel";
import {Text} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

interface DaySliderProps {
    dates: string[];
    onSlideClick: (index: number) => void; 
}

export function DaySlider(props: DaySliderProps) {

    return(
        <Carousel
            w="100%"
            height="100%"
            slideSize="33.3333%"
            slideGap="sm"
            nextControlIcon={<IconArrowRight size={16} />}
            previousControlIcon={<IconArrowLeft size={16} />}
            onSlideChange={(index)=>props.onSlideClick(index)}
        >
            {Array.from({length: props.dates.length}).map((_,index)=> {
                return (
                    <Carousel.Slide key={index} onClick={()=>props.onSlideClick(index)}>
                        <Text ta="center" size="xl">{props.dates[index]}</Text>
                    </Carousel.Slide>
                )
            })}
        </Carousel>
    )
}