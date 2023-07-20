import { Temperature } from "@/types/Temperature";
import { Box, Stack, Title } from "@mantine/core";

interface TemperatureDisplayProps{
    temperature: number;
    unit: Temperature;
}

export function TemperatureDisplay(props: TemperatureDisplayProps) {
    return (
        <Stack align="center" justify="center">
            <Title color="gray.7" fz="lg">Temperature display</Title>
            <Box h="60%" fz={50} color="gray.2">{props.temperature} {props.unit}</Box>
            <Box h="30%"></Box>
        </Stack>
    )
}