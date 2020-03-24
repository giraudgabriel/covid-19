import axios from 'axios';

class Api {
    constructor() {
        this.baseUrl = 'https://corona.lmao.ninja';
    }
    //Returns all total cases, recovery, and deaths.
    async getAll() {
        return await axios.get(`${this.baseUrl}/all`);
    }
    //Returns data of each country sorted by the parameter
    async getCountries(sort = 'cases') {
        return await axios.get(`${this.baseUrl}/countries?sort=${sort}`);
    }
    //Returns data of a specific country. If an exact name match is desired pass ?strict=true in the query string
    async getCountry(country) {
        return await axios.get(`${this.baseUrl}/countries/${country}`);
    }
    //Returns all United States of America and their Corona data
    async getStates(){
        return await axios.get(`${this.baseUrl}/states`);
    }
    //Credits for https://github.com/novelcovid/api 
}

export default new Api();