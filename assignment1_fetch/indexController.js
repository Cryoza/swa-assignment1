import {ServiceFetch} from "./serviceFetch.js";

const service = new ServiceFetch();

function buttonLoad() {

    //Clear Table when change city.
    document.getElementById("next24hours").innerHTML = "";
    document.getElementById("latestMeasEach").innerHTML = "";

    let chosen_city = document.getElementById("dropdown_menu").value;

    service.getDataForForecast(chosen_city)
        .then(ls => ls.forEach(data => loadForecastData(data)));

    service.getDataForCity(chosen_city)
        .then(ls => loadTempData(ls));

    service.getDataForCity(chosen_city)
        .then(ls => loadTotalPrecipitationData(ls));

    service.getDataForCity(chosen_city)
        .then(ls => loadAverageWindData(ls));

    service.getDataForCity(chosen_city)
        .then(ls => latestMeach(ls));

}

function latestMeach(data) {
    const table1 = document.getElementById("latestMeasEach");

    let i = data.length - 1;
    let countforMeas = 0;

    while (i > data.length - 5) {
        switch (data[i].type) {

            case "temperature":
                const temp_row = table1.insertRow(-1);
                temp_row.insertCell(0).innerText = data[i].place;
                temp_row.insertCell(1).innerText = data[i].time;
                temp_row.insertCell(2).innerText = data[i].type;
                temp_row.insertCell(3).innerText = data[i].value;
                temp_row.insertCell(4).innerText = data[i].unit;
                countforMeas++;
                i--;
                break;
            case "cloud coverage":
                const cloud_cov_row = table1.insertRow(-1);
                cloud_cov_row.insertCell(0).innerText = data[i].place;
                cloud_cov_row.insertCell(1).innerText = data[i].time;
                cloud_cov_row.insertCell(2).innerText = data[i].type;
                cloud_cov_row.insertCell(3).innerText = data[i].value;
                cloud_cov_row.insertCell(4).innerText = data[i].unit;
                countforMeas++;
                i--;
                break;
            case "wind speed":
                const wind_speed_row = table1.insertRow(-1);
                wind_speed_row.insertCell(0).innerText = data[i].place;
                wind_speed_row.insertCell(1).innerText = data[i].time;
                wind_speed_row.insertCell(2).innerText = data[i].type;
                wind_speed_row.insertCell(3).innerText = data[i].value;
                wind_speed_row.insertCell(4).innerText = data[i].unit;
                countforMeas++;
                i--;
                break;
            case "precipitation":
                const precipitation_row = table1.insertRow(-1);
                precipitation_row.insertCell(0).innerText = data[i].place;
                precipitation_row.insertCell(1).innerText = data[i].time;
                precipitation_row.insertCell(2).innerText = data[i].type;
                precipitation_row.insertCell(3).innerText = data[i].value;
                precipitation_row.insertCell(4).innerText = data[i].unit;
                countforMeas++;
                i--;
                break;
        }
        if (countforMeas === 5) {
            break;
        }
    }
}

//Forecast 24 hrs
function loadForecastData(data) {
    const table = document.getElementById('next24hours');
    const row = table.insertRow(-1);

    row.insertCell(0).innerText = data.place;
    row.insertCell(1).innerText = data.time;
    row.insertCell(2).innerText = data.type;
    row.insertCell(3).innerText = data.from;
    row.insertCell(4).innerText = data.to;
    row.insertCell(5).innerText = data.unit;
}

//Min/Max Temperature
function loadTempData(data) {
    let temps = data
        .filter(d => d.type === 'temperature')
        .map(d => d.value);

    let min = Math.min(...temps);
    let max = Math.max(...temps);

    document.getElementById("minTemp").innerText = `${min}` + " C";
    document.getElementById("maxTemp").innerText = `${max}` + " C";
}

//Total Precipitation
function loadTotalPrecipitationData(data) {
    let temps = data
        .filter(d => d.type === 'precipitation')
        .map(d => d.value);

    let total = Math.round(temps.reduce((a, b) => a + b, 0));

    document.getElementById("precipitationTotal").innerText = `${total}` + " mm";
}

//Average wind
function loadAverageWindData(data) {
    let temps = data
        .filter(d => d.type === 'wind speed')
        .map(d => d.value);

    let avg = Math.round(temps.reduce((a, b) => a + b, 0) / temps.length);

    document.getElementById("windSpeedAvg").innerText = `${avg}` + " m/s";
}


document.getElementById('loadData').onclick = (e) => buttonLoad();