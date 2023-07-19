import { WeatherCode } from "@/types/WeatherCode";
import { Stack, Title } from "@mantine/core";
import Image from "next/image";

interface WeatherImageDisplayProps {
    weatherCode: WeatherCode;
}

export function WeatherImageDisplay(props: WeatherImageDisplayProps) {
    return (
        <Stack align="center">
            <Title fz="lg" color="gray.7">Weather Display</Title>
            <Image
                src={`./next.svg`}
                alt="illustration"
                width={100}
                height={100}
            />
        </Stack>
    )
}