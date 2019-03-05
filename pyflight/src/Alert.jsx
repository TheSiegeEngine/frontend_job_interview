import React from 'react';

let text = {
    width: '100%',
    marginBottom: '.1em',
    borderRadius: '4px',
    padding: '.4em 2em',
    fontSize: '1.2rem',
    color: '#222222'
}

let Alert = ({result, msg}) => {
    let backgroundColor = parseInt(result) ? '#3Fb618' : '#FF0039';
    return <div style={{ ...text, backgroundColor }}>{parseInt(result) ? 'Confirmation Code: ' : 'Error: '}{msg}</div>
}

export default Alert;