import { Coords } from "./Coords";

export interface City extends Coords{
    id: number;
    name: string;
    value: string;
    country: string;
    admin1: string;
    admin2: string;
    country_code: string;
}