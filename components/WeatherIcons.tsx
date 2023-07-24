import { getWeatherFromWMOCode } from "@/utils/getWeatherFromWMOCode";
import { IconSunHigh, IconSunLow, IconCloudRain, IconBolt, IconCloudFog, IconSnowflake, IconMoon, IconMoonStars } from "@tabler/icons-react";

interface WeatherIconsProps {
    weatherCode: number;
    isDay: number;
    size?: number;
}

export function WeatherIcons(props: WeatherIconsProps) {
    const weather = getWeatherFromWMOCode(props.weatherCode);
    return (
        <>{props.isDay ?
            <>
                <IconSunHigh display={weather === "clear" ? "block" : "none"} size={props.size} />
                <IconSunLow display={weather === "mostly clear" ? "block" : "none"} size={props.size} />
            </> :
            <>
                <IconMoonStars display={weather === "clear" ? "block" : "none"} size={props.size} />
                <IconMoon display={weather === "mostly clear" ? "block" : "none"} size={props.size} />
            </>
        }

            <IconCloudFog display={weather === "fog" ? "block" : "none"} size={props.size} />
            <IconBolt display={weather === "thunderstorm" ? "block" : "none"} size={props.size} />
            <IconSnowflake display={(weather === "snow" || weather === "freezing rain") ? "block" : "none"} size={props.size} />
            <IconCloudRain display={(weather === "drizzle" || weather === "rain") ? "block" : "none"} size={props.size} />
        </>
    )
}