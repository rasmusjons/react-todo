import React from 'react';

const mainForm = props => {
    const style = {
        width: '600px',
        height: '200px',
        backgroundColor: 'blue',
        color: 'white',
        margin: 'auto'
    };
    return (
        <div style={style}>
            <input type="text" onChange={props.changeHandler}></input>
        </div>
    );
};

export default mainForm;
