import { Speed } from "@/types/Speed";
import { Stack, Title, Text } from "@mantine/core";

interface WindDisplayProps {
    windspeedValue: number;
    unit: Speed;
}

export function WindDisplay(props: WindDisplayProps) {
    return (
        <Stack justify="center" align="center">
            <Title color="gray.7" fz="lg">Windspeed display</Title>
            <Text ff="unset" fw="bold" fz={50}>{props.windspeedValue} {props.unit}</Text>
        </Stack>
    )
}