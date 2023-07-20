import { Speed } from "@/types/Speed";
import { Box, Stack, Title } from "@mantine/core";

interface WindDisplayProps {
    windspeedValue: number;
    unit: Speed;
}

export function WindDisplay(props: WindDisplayProps) {
    return (
        <Stack justify="center" align="center">
            <Title color="gray.7" fz="lg">Windspeed display</Title>
            <Box h="60%" fz={50}>{props.windspeedValue} {props.unit}</Box>
            <Box h="30%"></Box>
        </Stack>
    )
}