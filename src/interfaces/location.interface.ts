import { LocationType } from "../types";

import { CarRental } from "./car-rental.interface";
import { City } from "./city.interface";
import { DeparturePoint } from "./departure-point.interface";
import { LatLng } from "./lat-lng.interface";
import { Region } from "./region.interface";
import { Tag } from "./tag.interface";

export interface Location extends Region {
    int_id: number;
    airport_int_id: number;
    active: boolean;
    code: string;
    icao: string;
    slug_en: string;
    alternative_names?: string[];
    rank: number;
    global_rank_dst: number;
    dst_popularity_score: number;
    timezone: string;
    city?: City;
    location?: LatLng;
    alternative_departure_points: DeparturePoint[];
    tags: Tag[];
    providers: number[];
    special: Region[];
    subdivision?: Region;
    country?: Region;
    tourist_region: Region[];
    car_rentals: CarRental[];
    new_ground: boolean;
    routing_priority: number;
    type: LocationType;
}