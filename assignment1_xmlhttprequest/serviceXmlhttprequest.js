// The hourly forecast for the next 24 hours
export class ServiceXmlhttprequest {
    getDataForForecast(city, success, fail) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://localhost:8080/forecast/${city}`);
        xhr.onload = (e) => {
            const body = xhr.responseText;
            const jsonData = JSON.parse(body);
            success(jsonData);
        };
        xhr.onerror = (err) => {
            if (fail)
                fail(err);
        };

        xhr.send();
    }

//Get Data For City
    getDataForCity(city, success, fail) {
        const xhr1 = new XMLHttpRequest();
        xhr1.open("GET", `http://localhost:8080/data/${city}`);
        xhr1.onload = (e) => {
            const body1 = xhr1.responseText;
            const jsonData1 = JSON.parse(body1)
            success(jsonData1);

        };
        xhr1.onerror = (err) => {
            if (fail)
                fail(err);
        };

        xhr1.send();
    }
}

