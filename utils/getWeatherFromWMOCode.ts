import { WeatherCode } from "@/types/WeatherCode";

export function getWeatherFromWMOCode(wmo: number): WeatherCode {
    if (wmo >= 1 && wmo <= 3) return ('mostly clear');
    else if (wmo >= 45 && wmo <= 48) return ('fog');
    else if (wmo >= 51 && wmo <= 57) return ('drizzle');
    else if (wmo >= 61 && wmo <= 65) return ('rain');
    else if (wmo >= 66 && wmo <= 67) return ('freezing rain');
    else if (wmo >= 71 && wmo <= 77) return ('snow');
    else if (wmo >= 80 && wmo <= 82) return ('rain');
    else if (wmo >= 85 && wmo <= 86) return ('snow');
    else if (wmo >= 95 && wmo <= 99) return ('thunderstorm');
    return ('clear');
}