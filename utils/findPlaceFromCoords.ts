import cities from '@/json/cities.json'

export function findPlaceFromCoords(coords: number[]) {
    const notFound = "City not found";
    if (coords.length !== 2) {
        return notFound
    }
    const lat = coords[0];
    const long = coords[1];
    let Tab = cities.results;
    Tab = Tab.filter((elem)=>(elem.latitude-lat < 0.05)&&(elem.longitude-long < 0.05))
    if (Tab) {
        return Tab[0].name
    }
    return notFound
}