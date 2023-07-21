import { City } from "@/types/City";
import { Weather } from "@/types/Weather";
import { Button, Card, Loader, Stack, Title, Text, Group, useMantineTheme, ActionIcon, Tooltip } from "@mantine/core";
import Link from "next/link";
import { WeatherIcons } from "./WeatherIcons";
import { IconCross, IconSquareRoundedX, IconSquareRoundedXFilled, IconWind } from "@tabler/icons-react";
import { SmallTemperatureDisplay } from "./SmallTemperatureDisplay";
import { SmallWindspeedDisplay } from "./SmallWindspeedDisplay";

interface CityCardProps extends City {
    weather?: Weather;
    onDelete: (id: number) => void;
}

export function CityCard(props: CityCardProps) {
    return (
        <Card h="100%" style={{backgroundColor: "rgba(255,255,255,0.4)"}}>
            <Stack h="100%" justify="space-between">
                <Stack spacing={1}>
                    <Title lineClamp={2} fz="xl" style={{ wordBreak: "break-word" }}>{props.name}</Title>
                    <Text lineClamp={3} fz="sm">{`${props.country} > ${props.admin1} > ${props.admin2}`} </Text>
                </Stack>
                <Stack>
                    {props.weather ?
                        <Stack py="sm">
                            <Text fw="bold" ta="center">Today's forecast</Text>
                            <SmallTemperatureDisplay
                                {...props.weather.daily}
                                unit={props.weather.daily_units.temperature_2m_max}
                                dayFromToday={0}
                            />
                            <SmallWindspeedDisplay
                                windspeeds={props.weather.daily.windspeed_10m_max}
                                unit={props.weather.daily_units.windspeed_10m_max}
                                dayFromToday={0}
                            />
                            <Stack py={3}>
                                <Text ta="center" fw="bold">Tomorrow's forecast</Text>
                                <SmallTemperatureDisplay
                                    {...props.weather.daily}
                                    unit={props.weather.daily_units.temperature_2m_max}
                                    dayFromToday={1}
                                />
                            </Stack>
                        </Stack> :
                        <Loader></Loader>}
                    <Group w="100%" position="apart">
                        <Link href={`/weather/${props.id}`}>
                            <Button>
                                See details
                            </Button>
                        </Link>
                        <Tooltip label="Remove" withinPortal>
                            <ActionIcon onClick={() => props.onDelete(props.id)}>
                                <IconSquareRoundedX color="red" size={40} />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Stack>
            </Stack>
        </Card>
    )
}