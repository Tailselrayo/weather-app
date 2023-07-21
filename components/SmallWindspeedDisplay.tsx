import { Speed } from "@/types/Speed";
import { Group, Stack, useMantineTheme, Text } from "@mantine/core";
import { IconWind } from "@tabler/icons-react";

interface SmallWindspeedDisplayProps {
    windspeeds: number[];
    unit: Speed;
    dayFromToday: number;
}

export function SmallWindspeedDisplay(props: SmallWindspeedDisplayProps) {
    const theme = useMantineTheme();

    const defineColor = (windspeed: number) => {
        if (windspeed < 10) return "green"
        else if (windspeed < 25) return "yellow"
        else if (windspeed < 50) return "orange"
        return "red"

    }

    return (
        <Group bg={defineColor(props.windspeeds[props.dayFromToday])} style={{ borderRadius: theme.radius.lg }}>
            <IconWind size={50} />
            <Stack align="center" spacing={2}>
                <Text fz="sm" italic>Max wind speed</Text>
                <Text>{props.windspeeds[props.dayFromToday]}{props.unit}</Text>
            </Stack>
        </Group>
    )
}