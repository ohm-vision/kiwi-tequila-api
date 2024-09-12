import { SearchFlight } from "./flight.interface";

export interface SearchFlightRoute extends Pick<SearchFlight, "cityFrom" | "cityCodeFrom" |
                                                        "cityTo" | "cityCodeTo" |
                                                        "flyFrom" | "flyTo" | 
                                                        "local_arrival" | "local_departure" | 
                                                        "utc_arrival" | "utc_departure"> {
    /**
     * a unique itinerary identifier. It is made up of flight IDs and is divided by |
     */
    id: string;
    /**
     * all airlines used within the itinerary
     */
    airlines: string[];
    baglimit: {
        hold_dimensions_sum: number;
        /**
         * the height of the hold luggage
         */
        hold_height: number;
        /**
         * the length of the hold luggage
         */
        hold_length: number;
        /**
         * the weight of the hold luggage
         */
        hold_weight: number;
        /**
         * the width of the hold luggage
         */
        hold_width: number;
        /**
         * the height of the hand luggage
         */
        hand_height: number;
        /**
         * the length of the hand luggage
         */
        hand_length: number;
        /**
         * the weight of the hand luggage
         */
        hand_weight: number;
        /**
         * the width of the hand luggage
         */
        hand_width: number;
        /**
         * the height of the hand luggage
         */
        personal_item_height: number;
        /**
         * the length of the hand luggage
         */
        personal_item_length: number;
        /**
         * the weight of the hand luggage
         */
        personal_item_weight: number;
        /**
         * the width of the hand luggage
         */
        personal_item_width: number;
    };
    availability: {
        seats?: number;
    };
    /**
     * price of the individual bags
     */
    bags_price: Record<number, number>;
    /**
     * lists the selected currency and the conversion to EUR
     */
    conversion: {
        EUR: number;
    };
    fare: {
        adults: number;
        children: number;
        infants: number;
    };
    /**
     * the origin country information
     */
    countryFrom: {
        /**
         * the origin country code
         */
        code: string;
        /**
         * the origin country name
         */
        name: string;
    };
    /**
     * destination country information
     */
    countryTo: {
        /**
         * destination country IATA code
         */
        code: string;
        /**
         * destination country name
         */
        name: string;
    };
    /**
     * flight distance from the origin to the destination
     */
    distance: number;
    duration: {
        departure: number;
        return: number;
        total: number;
    };
    facilitated_booking_available: boolean;
    /**
     * the duration of the flight in hours
     */
    fly_duration: string;
    has_airport_change: boolean;
    technical_stops: number;
    throw_away_ticketing: boolean;
    hidden_city_ticketing: boolean;
    virtual_interlining: boolean;
    /**
     * the number of nights in the destination
     */
    nightsInDest?: number;
    pnr_count: number;
    /**
     * price in the selected currency
     */
    price: number;
    quality: number;
    rank: number;
    /**
     * information about the route
     */
    route: SearchFlight[];
    booking_token: string;
    deep_link: string;
    /**
     * 
     */
    routes: string[];
    /**
     * 
     */
    transfers: string[];
    /**
     * 
     */
    type_flights: string;
}
