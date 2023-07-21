declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_WEATHER_API_URL string;
            NEXT_PUBLIC_GEOCODING_API_URL string;
        }
    }
}
export {}