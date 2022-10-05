export function Event(state) {
    return {
        getTime() {
            return state.time
        },
        getPlace() {
            return state.place
        }
    }
}

export function DataType(state) {
    return {
        getType() {
            return state.type
        }
    }
}

export function WeatherData(state) {
    const event = Event(state)
    const dataType = DataType(state)

    function getValue() {
        return state.value
    }

    return {...event, ...dataType, getValue}
}

export function Temperature(time, place, type, unit, value) {
    const state = {time, place, type, unit, value}
    const weatherData = WeatherData(state)

    return {...weatherData}
}

export function Precipitation(time, place, type, unit, value, precipitationType) {
    const state = {time, place, type, unit, value}
    const weatherData = WeatherData(state)

    function getPrecipitationType() {
        return state.precipitationType
    }


    return {...weatherData, getPrecipitationType}
}

export function Wind(time, place, type, unit, value, direction) {
    const state = {time, place, type, unit, value, direction}
    const weatherData = WeatherData(state)

    function getDirection() {
        return state.direction
    }

    return {...weatherData, getDirection}
}
