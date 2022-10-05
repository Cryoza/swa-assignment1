// The hourly forecast for the next 24 hours
export class ServiceFetch {

    getDataForForecast(city) {
        return fetch(`http://localhost:8080/forecast/${city}`)
            .then(r => r.json())
            .then((data) => {
                    return data;
                }
            ).catch((err) => {
            console.warn("Something went bad", err);
        });
    }

    getDataForCity(city) {
        return fetch(`http://localhost:8080/data/${city}`)
            .then(r => r.json())
            .then((data) => {
                    return data;
                }
            ).catch((err) => {
                console.warn("Something went bad", err);
            });
    }


}

