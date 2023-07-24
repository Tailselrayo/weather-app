import { Group, Title } from "@mantine/core";

export function DisplayHeader() {
    return (
        <Group w="100%" position="apart" grow>
            <Title ta="center" color="gray.7" fz="lg">Temperature display</Title>
            <Title ta="center" fz="lg" color="gray.7">Weather Display</Title>
            <Title ta="center" color="gray.7" fz="lg">Windspeed display</Title>
        </Group>
    )
}