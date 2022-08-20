import { FlyLocation, Radius } from "../interfaces";
import { FlyLocations } from "../types";

export function serializeFlyLocations(input: FlyLocations) : string[] {
    if (Array.isArray(input)) {
        return input.flatMap(serializeFlyLocations);
    }

    if (isFlyLocation(input)) {
        const { type, value } = input;

        if (Array.isArray(value)) {
            return value.map(v => `${type}:${v}`);
        }

        return [`${type}:${value}`];
    }

    if (isRadius(input)) {
        const { lat, lon, xkm } = input;

        return [`${lat}-${lon}-${xkm}km`];
    }

    return [input];
}

function isFlyLocation(obj: unknown): obj is FlyLocation {
    return !!obj &&
        typeof obj === "object" &&
        "type" in obj &&
        "value" in obj;
}

function isRadius(obj: unknown): obj is Radius {
    return !!obj &&
        typeof obj === "object" &&
        "lat" in obj &&
        "lon" in obj &&
        "xkm" in obj;
}
