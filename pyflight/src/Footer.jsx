import React from 'react';

let footer = {
    position: 'fixed',
    bottom: '0',
    height: '5vh',
    width: '100vw',
    backgroundColor: '#DEDDEA'
};

let footBox = {
    textAlign: 'center',
    paddingTop: '.8em'
};

let footText = {
    color: '#4A4A4E',
    textShadow: '1px 1px #4A4A4E11',
    fontSize: '20px'
};

let Footer = () => (
    <div style={footer}>
        <div style={footBox}>
            <span style={footText}>PyFlight not responsible for lost luggage or cancelled flights</span>
        </div>
    </div>
)

export default Footer;