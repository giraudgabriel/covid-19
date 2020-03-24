class CountryModel {
    constructor({
        country = null,
        countryInfo: {
            iso2 = null,
            iso3 = null,
            lat = null,
            long = null,
            flag = null
        },
        cases = 0,
        todayCases = 0,
        deaths = 0,
        todayDeaths = 0,
        recovered = 0,
        active = 0,
        critical = 0,
        casesPerOneMillion = 0
    }) {
        this.country = country;
        this.countryInfo = {
            iso2: iso2,
            iso3: iso3,
            lat: lat,
            long: long,
            flag: flag
        };
        this.cases = cases;
        this.todayCases = todayCases;
        this.deaths = deaths;
        this.todayDeaths = todayDeaths;
        this.recovered = recovered;
        this.active = active;
        this.critical = critical;
        this.casesPerOneMillion = casesPerOneMillion;
    }
}

export default CountryModel;
