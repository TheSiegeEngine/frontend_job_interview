import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Alert from './Alert';
import * as css from './BookFlightCss'

class BookFlight extends Component{
    constructor(props){
        super(props);
        let initialState = {
            id: this.props.match.params.id,
            airline: this.props.match.params.airline,
            errors: [],
            confirm: []
        }
        this.state = initialState;
    }
    bookFlight(e){
        e.preventDefault();
        let body = {fight_number: this.state.id};
        let fields = ['bags', 'first_name', 'last_name'];
        fields.forEach(field => {
            if(document.getElementById(field).value){
                body[field] = document.getElementById(field).value;
            }
        });

        axios.post('/book', body).then(res =>{
            res = res.data;
            if(res.success){
                this.setState({
                    errors: [],
                    confirm: [{msg: res.confirmation}]
                })
            } else {
                let errors = [{msg: res.message}];
                if(res.errors){
                    res.errors.forEach(error => {
                        error = error.field + "_" + error.error;
                        errors.push({msg: error.split("_").join(" ")});
                    });
                }
                this.setState({
                    errors: errors,
                    confirm: []
                })
            }
        })
    }
    render(){
        return (
            <div style={css.container}>
                <h2 style={css.header}>{this.state.airline} {this.state.id}</h2>
                <h3 style={css.subHeader}>Booking info</h3>
                <div style={css.Field}>
                    {this.state.errors.map((error, i) => <Alert key={i} result='0' msg={error.msg} /> )}
                    {this.state.confirm.map((success, i) => <Alert key={i} result='1' msg={success.msg} /> )}
                </div>
                <form style={css.Field} onSubmit={(e) => this.bookFlight(e)}>
                    <input style={css.textBox} type='text' id='first_name' name='first_name' placeholder='First Name'/>
                    <input style={css.textBox} type='text' id='last_name' name='last_name' placeholder='Last Name'/>
                    <input style={css.textBox} type='text' id='bags' name='bags' placeholder='Number of Bags'/>
                    <button style={css.button}>Book!</button>
                </form>
            </div>
        )
    }
}


export default withRouter(BookFlight);