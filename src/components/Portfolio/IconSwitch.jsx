import React from 'react';

function IconSwitch(props) {
    const { icon } = props;

    return (
        <button className={"material-icons"} onClick={() => {props.onSwitch()}}>
            {icon}
        </button>
    );
}

export default IconSwitch;

