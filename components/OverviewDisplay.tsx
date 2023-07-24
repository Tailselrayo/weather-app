import { Weather } from "@/types/Weather";
import { Stack, Group } from "@mantine/core";
import { DisplayHeader } from "./DisplayHeader";
import { TemperatureDisplay } from "./TemperatureDisplay";
import { WeatherIcons } from "./WeatherIcons";
import { WindDisplay } from "./WindDisplay";

interface OverviewDisplayProps extends Weather {
    slideNb: number;
}

export function OverviewDisplay(props: OverviewDisplayProps) {
    return (
        <Stack>
            <DisplayHeader />
            <Group
                w="100%"
                h="60%"
                position="apart"
                grow
            >
                <TemperatureDisplay
                    temperature={props.daily.temperature_2m_max[props.slideNb]}
                    unit={props.daily_units.temperature_2m_max}
                />
                <WeatherIcons weatherCode={props.daily.weathercode[props.slideNb]} isDay={1} size={150} />
                <WindDisplay unit={props.daily_units.windspeed_10m_max} windspeedValue={props.daily.windspeed_10m_max[props.slideNb]} />
            </Group>
        </Stack>
    )
}