import { Group, MantineColor, Stack, Text, useMantineTheme } from "@mantine/core";
import { WeatherIcons } from "./WeatherIcons";
import { WeatherData } from "@/types/WeatherData";
import { Temperature } from "@/types/Temperature";
import { getWeatherFromWMOCode } from "@/utils/getWeatherFromWMOCode";

interface SmallTemperatureDisplayProps extends WeatherData {
    unit: Temperature;
    dayFromToday: number;
}

export function SmallTemperatureDisplay(props: SmallTemperatureDisplayProps) {
    const theme = useMantineTheme();
    const colors = {
        "clear": "green.4",
        "mostly clear": "green.6",
        "fog": "yellow",
        "drizzle": "blue.4",
        "rain": "blue",
        "freezing rain": "yellow",
        "snow": "gray.1",
        "thunderstorm": "dark.4",
    }

    return (
        <Group
            bg={colors[getWeatherFromWMOCode(props.weathercode[props.dayFromToday])]}
            style={{ borderRadius: theme.radius.lg }}
            position="center"
        >
            <WeatherIcons weatherCode={props.weathercode[props.dayFromToday]} size={60} />
            <Stack spacing={2}>
                <Group position="apart">
                    <Text>{`Max :`}</Text>
                    <Text> {`${Math.round(props.temperature_2m_max[props.dayFromToday])}${props.unit}`}</Text>
                </Group>
                <Group position="apart">
                    <Text>{`Min :`}</Text>
                    <Text>{`${Math.round(props.temperature_2m_min[props.dayFromToday])}${props.unit}`}</Text>
                </Group>
            </Stack>
        </Group>
    )
}