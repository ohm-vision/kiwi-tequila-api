# kiwi-tequila-api
Kiwi Tequila API SDK (Node JS)

Wrapper for the Kiwi Tequila API (unofficial)
[Kiwi Tequila Docs](https://tequila.kiwi.com/portal/docs/tequila_api)

[![npm version](https://badge.fury.io/js/@ohm-vision%2Fkiwi-tequila-api.svg)](https://badge.fury.io/js/@ohm-vision%2Fkiwi-tequila-api)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/1kom)

# Installation
Run the following command
```
npm install @ohm-vision/kiwi-tequila-api
```

# Usage

You may either use the full API through the `KiwiApi` object, or import the `KiwiPartialApi` for a specific search type

The `KiwiOptions` interface supports
* [required] apiKey: this is your Kiwi API key
* [optional] baseURL: this is the URL to the Kiwi endpoint (defaults to `https://tequila-api.kiwi.com`)

## Example with full api
```
import { KiwiApi, KiwiOptions } from "@ohm-vision/kiwi-tequila-api";

const options: KiwiOptions = {
    apiKey: "**** enter your api key here ***",
};
const kiwi = new KiwiApi(options);

kiwi.search.singlecity({
    fly_from: "FRA",
    fly_to: "PRG",
    date_from: new Date("01/04/2021"),
    date_to: new Date("05/04/2021")
    return_from: new Date("03/04/2021"),
    return_to: new Date("04/04/2021"),
    flight_type: "round"
})
.then(results => console.log(results))
.error(e => console.error(e));
```

## Example with partial api
```
import { KiwiApi, KiwiOptions } from "@ohm-vision/kiwi-tequila-api";

const options: KiwiOptions = {
    apiKey: "**** enter your api key here ***",
};
const kiwi = KiwiApi.singlecity(options);

kiwi.search({
    fly_from: "FRA",
    fly_to: "PRG",
    date_from: new Date("01/04/2021"),
    date_to: new Date("05/04/2021")
    return_from: new Date("03/04/2021"),
    return_to: new Date("04/04/2021"),
    flight_type: "round"
})
.then(results => console.log(results))
.error(e => console.error(e));
```

## Contact Me
[Ohm Vision, Inc](https://ohmvision.com)
