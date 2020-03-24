import React, {useState, useEffect} from 'react';
import CoronaService from '../services/CoronaService';
import Country from '../components/Country';
import CountryModel from '../models/CountryModel';

function Countries() {
    const [text,
        setText] = useState(null);
    const [filters,
        setFilters] = useState([]);

    function updateFilters() {
        const first = new CountryModel(CoronaService.countries[0]);
        const f = [];
        Object
            .keys(first)
            .forEach(k => typeof(first[k]) !== 'object'
                ? f.push(k)
                : console.log(k));
        console.log(f);
        setFilters(f);
    }

    function setNameOfFilter(filter) {
        let toChange = filter;
        toChange[0] = toChange[0].toUpperCase();
        toChange.slice(1);
        return toChange
            .match(/[A-Z][a-z]+|[0-9]+/g)
            .join(" ")
            .toUpperCase();
    }

    useEffect(() => {
        async function updateCountries() {
            await CoronaService.getCountries();
            setText('');
            updateFilters();
        }
        updateCountries();
    }, []);

    return (
        <div>
            <div className="row m-3">
                <div className="container">
                    <select className="form-control" name="keys" id="keys">
                        {filters.map(f => (
                            <option key={f} value={f}>{setNameOfFilter(f)}</option>
                        ))}
                    </select>

                    <br/>
                    <div className="input-group">
                        <input
                            type="text"
                            name="filter"
                            id="filter"
                            placeholder="Text to filter by name"
                            onChange={(e) => setText(e.target.value)}
                            className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                {CoronaService
                    .getFilteredCountries(text)
                    .map((country, index) => (
                        <div key={country.country} className="row col-12">
                            <div className="col-1">
                                <h3>{`${index + 1} º`}</h3>
                            </div>
                            <div className="col-11">
                                <Country data={country}/>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Countries;