import { City } from "@/types/City"
import { Group, Text } from "@mantine/core"
import Image from "next/image"
import { forwardRef } from "react"

interface AutocompleteItemProps extends City { }

export const AutocompleteItem = forwardRef<HTMLDivElement, AutocompleteItemProps>((props, ref) => {
    return (
        <>
            {/*@ts-ignore*/}
            <Group ref={ref} spacing="md" py="md" px={2} {...props}>
                <Image
                    src={`https://hatscripts.github.io/circle-flags/flags/${props.country_code.toLowerCase()}.svg`}
                    alt={`${props.country} flag`}
                    width={25}
                    height={25}
                />
                <Text maw="85%" h="100%" lineClamp={2}>{props.name}, {props.admin1}, {props.admin2}, {props.country}</Text>
            </Group>
        </>
    )
})