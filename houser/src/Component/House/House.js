import React from 'react';
// import Dashboard from '../Dashboard/Dashboard';

export default function House(props) {
    return(
        <div className="house">
            <div className="house-box">
                <img className="house-image" src={props.img} alt="house" />
            </div>
                <div className="house-text">
                    <h5>Property Name: {props.name}</h5>
                    <h5>Address: {props.address}</h5>
                    <h5>City: {props.city}</h5>
                    <h5>State: {props.state}</h5>
                    <h5>Zip: {props.zip}</h5>  
                </div>
                <div className="mortgage-text"> 
                        <h5>Monthly Mortgage: {props.mortgage}</h5>
                        <h5>Desired Rent: {props.rent}</h5>
                    </div>
                <div className="delete-box">
                    <button className="deleteBtn" onClick={_=> props.delete()}>Delete</button>
                </div>
        </div>
    )
}