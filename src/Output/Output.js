import React from 'react';

const output = props => {
    const style = {
        border: 'black solid 2px',
        height: '30px'
    };

    return (
        <p style={style} onChange={props.userInput}>
            {props.userInput}
        </p>
    );
};

export default output;
