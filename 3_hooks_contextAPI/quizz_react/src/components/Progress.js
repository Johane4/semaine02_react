import React from 'react';

const Progress = (props) => {
    return (
        <h2>
            Question {props.current} sur {props.total}
        </h2>
    );
}

export default Progress;
