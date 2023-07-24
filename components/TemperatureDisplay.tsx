import { Temperature } from "@/types/Temperature";
import { Text } from "@mantine/core";

interface TemperatureDisplayProps {
    temperature: number;
    unit: Temperature;
}

export function TemperatureDisplay(props: TemperatureDisplayProps) {
    return (
        <Text ff="unset" fw="bold" ta="center" fz={50} color="dark">{props.temperature} {props.unit}</Text>
    )
}