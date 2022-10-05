export function Weather(data) {
    let placeFilter = null
    let typeFilter = null
    let periodFilter = null

    function getPlaceFilter() {
        return placeFilter
    }

    function setPlaceFilter(place) {
        placeFilter = place
    }

    function getTypeFilter() {
        return typeFilter
    }

    function setTypeFilter(type) {
        typeFilter = type
    }

    function getPeriodFilter() {
        return periodFilter
    }

    function setPeriodFilter(period) {
        periodFilter = period
    }


    return {
        getPlaceFilter,
        setPlaceFilter,
        getTypeFilter,
        setTypeFilter,
        getPeriodFilter,
        setPeriodFilter
    }
}