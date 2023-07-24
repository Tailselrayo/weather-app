import { Speed } from "@/types/Speed";
import { Text } from "@mantine/core";

interface WindDisplayProps {
    windspeedValue: number;
    unit: Speed;
}

export function WindDisplay(props: WindDisplayProps) {
    return (
        <Text ta="center" ff="unset" fw="bold" fz={50}>{props.windspeedValue} {props.unit}</Text>
    )
}