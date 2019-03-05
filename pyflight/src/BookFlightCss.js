export let container = {
    border: '1px solid grey',
    boxShadow: '2px 2px 2px grey',
    padding: '0.5em',
    margin: '.5em auto',
    width: '35%',
    minWidth: '400px'
};

export let header = {
    color: '#222222',
};

export let subHeader = {
    color: '#333333'
};

export let Field = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '.5em .5em'
};

export let textBox = {
    fontSize: '1rem',
    marginBottom: '.5em',
    padding: '.5em .8em',
    border: '1px solid #A7B6BC',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px #888888',
    width: '100%'
};

export let button = {
    ...textBox,
    color: '#444444',
    fontWeight: '800'
};