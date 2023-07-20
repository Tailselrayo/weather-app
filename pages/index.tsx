import { Box, Modal, Stack, useMantineTheme, Text, Autocomplete, Button } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import cities from '@/json/cities.json'
import { FormEvent, useState } from "react";
import {AutocompleteItem} from '@/components/AutocompleteItem'
import { City } from "@/types/City";

export default function Home() {
    const [opened, modalHandlers] = useDisclosure(); 
    const [value, setValue] = useState('')
    const [favoriteCities, setFavoriteCities] = useLocalStorage<City[]>({key: "cities", defaultValue: []})

    const theme = useMantineTheme();
    const correctedCities = cities.results.map((elem) => 
    ({...elem, value: `${elem.name}, ${elem.admin3}, ${elem.admin2}, ${elem.admin1}, ${elem.country}`})
    )

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const city = correctedCities.find((elem)=>elem.value===value)
        if (!city) {
            return;
        }
        if (!favoriteCities.find((elem)=>elem.id===city.id)) {
            setFavoriteCities(favoriteCities.concat([city as City]))
        }
        modalHandlers.close();
        setValue("");
    }

    console.log(favoriteCities)

    return (
        <>
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
                <Stack
                    onClick={modalHandlers.open}
                    align="center"
                    justify="center"
                    h="100%"
                    w="20%"
                    bg="gray.2"   
                    style={{borderRadius: theme.radius.lg, opacity: 0.5, cursor: "pointer"}}
                >
                    <IconPlus />
                </Stack>
        </>
    )
}