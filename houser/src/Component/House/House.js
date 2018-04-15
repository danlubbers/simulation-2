import React from 'react';
// import Dashboard from '../Dashboard/Dashboard';

export default function House(props) {
    return(
        <div className="house">
            <img className="house-image" src={props.img} alt="house" />
                <div className="house-text"></div>
                        <h5>Property Name: {props.name}</h5>
                        <h5>Address: {props.address}</h5>
                        <h5>City: {props.city}</h5>
                        <h5>State: {props.state}</h5>
                        <h5>Zip: {props.zip}</h5>
                        <button className="deleteBtn" onClick={_=> props.delete()}>Delete</button>
        </div>
    )
}