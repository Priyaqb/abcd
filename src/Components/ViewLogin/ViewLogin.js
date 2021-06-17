import React from 'react';

const ViewLogin = (props) => {
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>My password is {props.password}</p>
        </div>
    )
}

export default ViewLogin;