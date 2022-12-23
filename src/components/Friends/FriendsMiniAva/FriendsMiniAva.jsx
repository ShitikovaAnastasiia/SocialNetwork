import React from 'react';
import {NavLink} from "react-router-dom";

const FriendsMiniAva = (props) => {
    const path = '/friends/' + props.id
    return (
        <span>
            <NavLink to={path}>{props.name}{' '}</NavLink>
        </span>
    );
};

export default FriendsMiniAva;