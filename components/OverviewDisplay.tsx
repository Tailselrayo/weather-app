import { Weather } from "@/types/Weather";
import { Stack, Group, Text } from "@mantine/core";
import { DisplayHeader } from "./DisplayHeader";
import { TemperatureDisplay } from "./TemperatureDisplay";
import { WeatherIcons } from "./WeatherIcons";
import { WindDisplay } from "./WindDisplay";
import { IconSunrise, IconSunset, IconUvIndex } from "@tabler/icons-react";

interface OverviewDisplayProps extends Weather {
    slideNb: number;
}

export function OverviewDisplay(props: OverviewDisplayProps) {
    return (
        <Stack>
            <DisplayHeader />
            <Group
                w="100%"
                position="apart"
                grow
            >
                <TemperatureDisplay
                    temperature={props.daily.temperature_2m_max[props.slideNb]}
                    unit={props.daily_units.temperature_2m_max}
                />
                <WeatherIcons weatherCode={props.daily.weathercode[props.slideNb]} isDay={1} size={120} />
                <WindDisplay unit={props.daily_units.windspeed_10m_max} windspeedValue={props.daily.windspeed_10m_max[props.slideNb]} />
            </Group>
            <Group w="100%" py="xs" grow>
                <Group position="center">
                    <IconSunrise />
                    <Text>{(new Date(props.daily.sunrise[props.slideNb])).toLocaleTimeString().slice(0,5)}</Text>
                </Group>
                <Group position='center'>
                    <IconUvIndex />
                    <Text>{props.daily.uv_index_max[props.slideNb]}</Text>
                </Group>
                <Group position="center">
                    <IconSunset />
                    <Text>{(new Date(props.daily.sunset[props.slideNb])).toLocaleTimeString().slice(0,5)}</Text>
                </Group>
            </Group>
        </Stack>
    )
}