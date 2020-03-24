import React from 'react';
import {Card} from 'react-bootstrap';
import CountryModel from '../models/CountryModel';

function Country({
    data,
    model = new CountryModel(data)
}) {

    function setBg() {
        return 'dark'
    }

    function setText() {
        return 'light'
    }

    return <Card bg={setBg} text={setText} className="m-1">
        <Card.Header>
            <img
                srcSet={model.countryInfo.flag}
                style={{
                width: '50px'
            }}
                alt={model.country}/> {model.country}
        </Card.Header>
        <Card.Body>
            <Card.Title>
                <ul className="list-group">
                    <li className="list-group-item">
                        Cases: {model.cases}
                        <br/>
                        Today Cases: {model.todayCases}<br/>
                        Deaths: {model.deaths}<br/>
                        Today Deaths: {model.todayDeaths}<br/>
                        Recovered: {model.recovered}<br/>
                        Active: {model.active}<br/>
                        Critical: {model.critical}<br/>
                        Cases Per One Million: {model.casesPerOneMillion}
                    </li>
                </ul>
            </Card.Title>
        </Card.Body>
    </Card>
}

export default Country;