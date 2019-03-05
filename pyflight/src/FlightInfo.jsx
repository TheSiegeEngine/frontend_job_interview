import React from 'react';
import { Link } from 'react-router-dom';

let container = {
    border: '1px solid grey',
    boxShadow: '2px 2px 2px grey',
    padding: '0.5em',
    margin: '.5em auto',
    width: '35%',
    minWidth: '400px'
}
let header = {
    color: '#222222',
}

let subHeader = {
    color: '#333333'
}

let link = {
    textDecoration: 'none',
    color: '#444444',
    fontWeight: '800'
}

let FlightInfo = ({flight}) => (
    <div style={container}>
        <h2 style={header}>{flight.airline} {flight.number}</h2>
        <h3 style={subHeader}>Cost: {flight.cost}</h3>
        <div>Departs from {flight.departs.airport} at {flight.departs.when.slice(11, 16)}</div>
        <div>Arrives at {flight.arrives.airport} at {flight.arrives.when.slice(11, 16)}</div>
        <Link style={ link } to={`/book/${flight.airline}/${flight.number}`}>Book!</Link>
    </div>
)


export default FlightInfo;