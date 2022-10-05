import {Weather} from "./weather.js";

export function weatherForecast(data) {
    const weather = weather(data);

    return {...weather}
}