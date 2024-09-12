import { PassengerCategory, VehicleType } from "../types";
import { Airline, BookingAirline, OperatingAirline } from "./airline.interface";
import { SegmentPrice } from "./price.interface";
import { Vehicle } from "./vehicle.interface";

interface Flight {
    /**
     * flight ID
     */
    id: string;
    combination_trip_id: string;
    operating_flight_no: string;
    /**
     * If set to True, passenger needs to recheck any hold luggage
     * (between two or more virtually interlined flights or airlines
     * that do not cooperate together).
     */
    bags_recheck_required: boolean;
    /**
     * return flight flag. 0 for no, 1 for yes
     */
    return: 0 | 1;
    /**
     * time of arrival in iso timestamp
     */
    local_arrival: string | Date;
    /**
     * time of arrival in utc format
     */
    utc_arrival: string | Date;
    /**
     * time of departure in iso timestamp
     */
    local_departure: string | Date;
    /**
     * time of departure in utc format
     */
    utc_departure: string | Date;
}

export interface BookingFlight extends Flight {
    original_trip_id: string;
    dst: string;
    src: string;
    /**
     * the flight number
     */
    flight_no: string;
    carrier_segment_code: string;
    airline: BookingAirline;
    operating_airline: OperatingAirline;
    scraping_start: number;
    extras: string;
    vehicle: Vehicle;
    src_terminal: string;
    dst_terminal: string;
    passengers_flight_check: Record<number, {
        eur: number;
        invalid: boolean;
        last_checked: number;
    }>;
    price: number;
    eur_children: number;
    eur_infants: number;
    eur: number;
    found_on: string;
    invalid: number;
    timestamp: string | Date;
    refreshed: string | Date;
    refresh_ttl: number;
    refresh_period: number;
    fare_basis: string;
    fare_category: string;
    fare_restriction: string;
    fare_class: string;
    baggage_fare: string;
    source: string;
    combination_prices: {
        segment_included_bags: {
            amount: number;
            concept: string;
        }[];
        price: number;
    }[];
    price_id: string;
    seats: number;
    source_name: string;
    source_url: string;
    /**
     * date and time when check-in opens
     */
    checkin: string | Date;
    src_country: string;
    dst_country: string;
    src_station: string;
    dst_station: string;
    infants_conditions: {
        trolley: boolean;
        hand_weight: number;
    };
    max_passengers_for_price: 9;
    src_name: string;
    dst_name: string;
    hiding_reason: null; // unknown
    is_self_transfer: boolean;
    bags_recheck_disclaimer: string;
    segment_pricing: Record<PassengerCategory, SegmentPrice>;
    sector: number;
    forced_priority_boarding: boolean;
}

export interface BookingSaveFlight extends Flight, Pick<BookingFlight, "bags_recheck_disclaimer" |
                                            "checkin" | "original_trip_id" | "vehicle" |
                                            "dst" |"dst_country" | "dst_name" | "dst_station" |
                                            "eur" | "eur_infants" | "eur_children" | "flight_no" |
                                            "forced_priority_boarding" | "infants_conditions" |
                                            "invalid" | "max_passengers_for_price" | "passengers_flight_check" |
                                            "price" | "refresh_period" | "refresh_ttl" | "refreshed" | 
                                            "scraping_start" | "source" | "source_name" | "source_url" |
                                            "src" | "src_country" | "src_name" | "src_station" |
                                            "timestamp"> {
    airline: Airline;
    operating_airline: Pick<Airline, "iata" | "name">;
}

export interface SearchFlight extends Omit<Flight, "combination_trip_id"> {
    /**
     * undocumented
     */
    combination_id?: string;
    /**
     * the airline code
     */
    airline: string;
    vi_connection: boolean;
    /**
     * departure city name
     */
    cityFrom: string;
    cityCodeFrom: string;
    /**
     * destination city name
     */
    cityTo: string;
    cityCodeTo: string;
    /**
     * Type of aircraft example - 32A (airbus A320), functionality is
     * still in beta form and it may be empty when we do not have this
     * information
     */
    equipment: string;
    /**
     * (often just referred to as a fare basis) an alphabetic or
     * alpha-numeric code used by airlines to identify a fare type and
     * allow airline staff and travel agents to find the rules applicable
     * to that fare
     */
    fare_basis: string;
    fare_category: string;
    /**
     * information about the particular class, we will be providing
     * higher classes in future
     */
    fare_classes: string;
    /**
     * group of fares that airlines use to market different travel options
     * associated with an airfare, such as non-refundable, flexible, etc.
     */
    fare_family: string;
    /**
     * the flight number
     */
    flight_no: number;
    /**
     * IATA code of the origin airport
     */
    flyFrom: string;
    /**
     * IATA code of the destination airport
     */
    flyTo: string;
    guarantee: boolean;
    // last_seen: string;
    operating_carrier: string;
    /**
     * time fo last refresh in iso timestamp
     */
    // refresh_timestamp: string | Date;
    vehicle_type: VehicleType;
}
