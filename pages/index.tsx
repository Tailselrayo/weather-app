import { Box, Modal, Stack, useMantineTheme, Text, Autocomplete, Button, Card, SimpleGrid, Grid, Flex } from "@mantine/core";
import { useDebouncedValue, useDisclosure, useLocalStorage } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { FormEvent, useEffect, useState } from "react";
import { AutocompleteItem } from '@/components/AutocompleteItem'
import { City } from "@/types/City";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import { CityCard } from "@/components/CityCard";
import { Weather } from "@/types/Weather";
import { getWeatherFromCity } from "@/utils/getWeatherFromCity";

export default function Home() {
    const [opened, modalHandlers] = useDisclosure();
    const [value, setValue] = useState('')
    const [suggestedCities, setSuggestedCities] = useState<City[]>([]);
    const [debounced] = useDebouncedValue(value, 500);
    const [favoriteCities, setFavoriteCities] = useLocalStorage<City[]>({ key: "cities", defaultValue: [] })
    const [weathers, setWeathers] = useState<Weather[]>([]);
    const [embla, setEmbla] = useState<Embla>()

    const theme = useMantineTheme();
    const correctedCities = suggestedCities.map((elem) =>
        ({ ...elem, value: `${elem.name}, ${elem.admin3}, ${elem.admin2}, ${elem.admin1}, ${elem.country}` })
    )

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const city = correctedCities.find((elem) => elem.value === value)
        if (!city) {
            return;
        }
        if (!favoriteCities.find((elem) => elem.id === city.id)) {
            setFavoriteCities(favoriteCities.concat([city as City]))
        }
        modalHandlers.close();
        setValue("");
    }

    const getCities = async (nameChange: string) => {
        const urlParams = new URLSearchParams({
            name: nameChange,
            count: "5",
        });
        const response = await fetch(`${process.env.NEXT_PUBLIC_GEOCODING_API_URL}?${urlParams}`);
        const data = await response.json();
        if (data.results) {
            setSuggestedCities(data.results);
        }
    }

    const onCityDelete = (id: number) => {
        setFavoriteCities(favoriteCities.filter((elem) => elem.id !== id))
    }


    useEffect(() => {
        if (debounced.length > 1) {
            getCities(debounced)
        }
    }, [debounced])

    useEffect(() => {
        favoriteCities.forEach(async (elem) => {
            const data = await getWeatherFromCity(elem, 3);
            setWeathers((currentState) => {
                if (!currentState.find((weather) => (elem.id === weather.cityId))) {
                    return currentState.concat([{ ...data, cityId: elem.id }]);
                }
                return currentState
            })
        })
    }, [favoriteCities])

    useAnimationOffsetEffect(embla, 300)

    return (
        <Grid h="100%" w="100%" columns={4}>
            <Modal
                h={300}
                opened={opened}
                onClose={modalHandlers.close}
                title={<Text fw="bold">Import meteo from a new location</Text>}
            >
                <form onSubmit={onSubmit}>
                    <Autocomplete
                        value={value}
                        onChange={setValue}
                        label="Choose a city"
                        placeholder="Ex: Paris"
                        dropdownPosition="bottom"
                        withinPortal
                        data={correctedCities}
                        itemComponent={AutocompleteItem}
                    />
                    <Button type="submit">
                        add
                    </Button>
                </form>
            </Modal>
            <Grid.Col span={1}>
                <Stack
                    onClick={modalHandlers.open}
                    align="center"
                    justify="center"
                    h="100%"
                    bg="gray.2"
                    style={{ borderRadius: theme.radius.lg, opacity: 0.5, cursor: "pointer" }}
                >
                    <IconPlus />
                </Stack>
            </Grid.Col>
            <Grid.Col span={3}>
                <Flex h="100%">
                    <Carousel
                        height="100%"
                        w="100%"
                        sx={{ flex: 1 }}
                        slideSize="31%"
                        slideGap="md"
                        align="start"
                        loop
                        withControls={favoriteCities.length > 3}
                        getEmblaApi={setEmbla}
                    >
                        {favoriteCities.map((elem) => {
                            const cityWeather = weathers.find((weather) => elem.id === weather.cityId)
                            return (
                                <Carousel.Slide key={elem.id}>
                                    <CityCard {...elem} weather={cityWeather} onDelete={onCityDelete} />
                                </Carousel.Slide>
                            )
                        })}
                    </Carousel>
                </Flex>
            </Grid.Col>
        </Grid>
    )
}