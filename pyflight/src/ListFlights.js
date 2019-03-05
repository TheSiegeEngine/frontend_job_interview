import React, { Component } from 'react';
import axios from 'axios';
import FlightInfo from './FlightInfo';

class ListFlights extends Component {
    constructor(props) {
        // Setting up initial state
        super(props);
        let initialState = {
            flights: []
        };
        this.state = initialState;
    }

    componentDidMount() {
        // Api call to pull flight data
        axios.get('/flights').then(res => {
            this.setState({
                flights: res.data.flights
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.flights.map((flight, i) => <FlightInfo flight={flight} key={i} />)}
            </div>
        );
    }
}

export default ListFlights;
