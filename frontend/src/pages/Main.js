import React, {useState, useEffect} from 'react';
import CoronaCard from '../components/CoronaCard';
import MapChart from '../components/MapChart';
import CoronaService from '../services/CoronaService';
import {Badge} from 'react-bootstrap';

function Main() {

    const [all,
        setAll] = useState(Object);

    const [lastUpdate,
        setLastUpdate] = useState(String);

    useEffect(() => {
        async function getAll() {
            await CoronaService.getAll();
            if (CoronaService.all) {
                let {updated, cases, deaths, recovered} = CoronaService.all;
                setAll({updated, deaths, recovered, cases});
                setLastUpdate(`${new Date(updated).toLocaleDateString()} ${new Date(updated).toLocaleTimeString()}`);
            }
        }
        getAll();
    }, []);

    return <div className="row text-center">
        <div className="col text-center">
            <img
                className="logo"
                style={{
                width: '80%'
            }}
                src="covid-19.webp"
                alt="covid-19"/>
            <div className="container">
                <Badge variant="info">Updated at {lastUpdate}</Badge>
            </div>
        </div>
        <div className="col text-center">
            <div className="container">
                <CoronaCard title='Cases' data={all.cases}></CoronaCard>
                <CoronaCard title='Deaths' data={all.deaths} bg='danger'></CoronaCard>
                <CoronaCard title='Recovered' data={all.recovered} bg='success' text='white'></CoronaCard>
            </div>
        </div>
        <MapChart/>
    </div>
}

export default Main;
