import { WeatherCode } from "@/types/WeatherCode";
import { IconSunHigh, IconSunLow, IconCloudRain, IconBolt, IconCloudFog, IconSnowflake } from "@tabler/icons-react";

interface WeatherIconsProps {
    weather: WeatherCode;
    size?: number;
}

export function WeatherIcons(props: WeatherIconsProps) {
    return(
        <>
            <IconSunHigh display={props.weather==="clear"?"block":"none"} size={props.size}/>
            <IconSunLow display={props.weather==="mostly clear"?"block":"none"} size={props.size}/>
            <IconCloudFog display={props.weather==="fog"?"block":"none"} size={props.size}/>
            <IconBolt display={props.weather==="thunderstorm"?"block":"none"} size={props.size}/>
            <IconSnowflake display={(props.weather==="snow"||props.weather==="freezing rain")?"block":"none"} size={props.size}/>
            <IconCloudRain display={(props.weather==="drizzle"||props.weather==="rain")?"block":"none"} size={props.size}/>
        </>
    )
}