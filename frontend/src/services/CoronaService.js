import Api from '../api';

class CoronaService {
    constructor() {
        this.all = {};
        this.countries = [];
        this.country = {};
    }
    async getAll() {
        try {
            await Api
                .getAll()
                .then((res) => {
                    if (res) {
                        const {updated, cases, deaths, recovered} = res.data;
                        this.all = {
                            updated,
                            deaths,
                            recovered,
                            cases
                        };
                        console.info('All updated', [this.all]);
                    }
                })
        } catch (e) {
            console.error(e);
        }
    }
    /**
     * @param {string} sort - Name of field to be sorted : [cases, deaths, recovered].
     */
    async getCountries(sort = 'cases') {
        try {
            await Api
                .getCountries(sort)
                .then((res) => {
                    if (res) {
                        this.countries = res.data;
                        console.info('Countries updated', [this.countries]);
                    }
                })
        } catch (e) {
            console.error(e);
        }

    }
    /**
     * @param {string} country - Country name to get only the info of the country.
     */
    async getCountry(country) {
        try {
            await Api
                .getCountry(country)
                .then(res => {
                    if (res) {
                        this.country = res.data;
                        console.info(`Country ${country} founded`, [this.country]);
                    }
                })
        } catch (e) {
            console.error(e);
        }

    }
    /**
     * @param {string} text - Text to filter countries by name.
     */
    getFilteredCountries(text) {
        return this
            .countries
            .filter(c => c.country.toLowerCase().includes(text.toLowerCase()));
    }

}

export default new CoronaService();
